import { useRef, useState, useEffect } from "react";
import CircleIconButton from "./CircleIconButton";
import PageTitle from "./PageTitle";
import { ReactComponent as ComposeIcon } from "../assets/icons/outline/compose.svg";
import { ReactComponent as CollapseIcon } from "../assets/icons/outline/collapse.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/icons/outline/left-arrow.svg";
import { ReactComponent as CheckmarkIcon } from "../assets/icons/checkmark.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/outline/calendar.svg";
import { ReactComponent as EllipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as ReactionIcon } from "../assets/icons/outline/reaction.svg";
import { ReactComponent as GifIcon } from "../assets/icons/outline/gif.svg";
import { ReactComponent as PictureIcon } from "../assets/icons/outline/picture.svg";
import { ReactComponent as EmojiIcon } from "../assets/icons/outline/emoji.svg";
import { ReactComponent as SendMessageIcon } from "../assets/icons/outline/sendMessage.svg";
import { ReactComponent as ChevronLeftIcon } from "../assets/icons/outline/chevron-left.svg";
import conversations from "../data/conversations";
import ConversationItem from "./ConversationItem";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/message-window-slice";
import { convActions } from "../store/conversation-slice";
import { customNum } from "../utility/number";

function MessagesWindow() {
  const logedinUser = useSelector((state) => state.user);
  console.log(logedinUser);
  const isOpen = useSelector((state) => state.messagesWindow.isOpen);
  const conversation = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  const messagesContainerRef = useRef();

  const scrollToBottem = () => {
    // objDiv.scrollTop = objDiv.scrollHeight;
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  };
  useEffect(() => {
    if (isOpen && conversation && messagesContainerRef.current) {
      scrollToBottem();
    }
  }, [isOpen, conversation]);

  const onToggle = () => {
    dispatch(actions.toggle());
  };
  const onChangeConversation = (username) => {
    dispatch(convActions.change(username));
  };
  const mainClasses = isOpen
    ? "hidden lg2:flex flex-col items-stretch h-[71vh] min-w-[350px] max-w-[400px] fixed bottom-0 right-0 mr-5 bg-white rounded-t-2xl overflow-hidden shadow-a transition-all duration-500"
    : "hidden lg2:flex flex-col items-stretch h-14 min-w-[350px] max-w-[400px] fixed bottom-0 right-0 mr-5 bg-white rounded-t-2xl overflow-hidden shadow-a transition-all duration-500";
  return (
    <div className={mainClasses}>
      <div className="flex absolute top-0 left-0 backdrop-blur-md w-full h-14 bg-white/90 justify-between items-center p-4 z-10 ">
        {conversation.username ? (
          <div className="flex gap-3 items-center">
            {isOpen && (
              <CircleIconButton
                color="black"
                hoverColor="black"
                onClick={() => {
                  onChangeConversation(null);
                }}
                icon={<LeftArrowIcon />}
              />
            )}
            <div className="flex flex-col justify-start items-start">
              <PageTitle>{conversation.user.display_name}</PageTitle>
              <div className="text-dark-gray text-xs font-semibold">
                @{conversation.username}
              </div>
            </div>
          </div>
        ) : (
          <PageTitle>Messages</PageTitle>
        )}
        <div className="flex justify-end items-center">
          {!conversation.username && (
            <CircleIconButton
              color="black"
              hoverColor="black"
              icon={<ComposeIcon />}
            />
          )}
          <div
            className={
              !isOpen
                ? "rotate-180 transition-all duration-500"
                : "transition-all duration-500"
            }
          >
            <CircleIconButton
              color="black"
              hoverColor="black"
              onClick={onToggle}
              icon={<CollapseIcon />}
            />
          </div>
        </div>
      </div>
      {isOpen && !conversation.username && (
        <div className="mt-12 h-full overflow-y-auto flex flex-col items-stretch justify-start">
          {conversations.map((conv) => {
            return (
              <ConversationItem
                key={conv.user.username}
                {...conv}
                onClick={onChangeConversation}
              ></ConversationItem>
            );
          })}
        </div>
      )}
      {isOpen && conversation.username && (
        <>
          <div
            ref={messagesContainerRef}
            className=" h-full overflow-y-auto flex flex-col items-stretch justify-start relative"
          >
            <div className="grow px-4 ">
              <UserDetail user={conversation.user} />
              {[...conversation.conversation.messages].reverse().map((m) => {
                if (m.to === logedinUser.username) {
                  return (
                    <OtherMessage
                      message={m}
                      image={conversation.user.profileImage}
                    />
                  );
                } else {
                  return <MyMessage message={m} />;
                }
              })}
            </div>
          </div>
          <ChatFooter />
        </>
      )}
    </div>
  );
}

export default MessagesWindow;

function ChatFooter() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const focusHandler = () => {
    setIsFocused(true);
  };
  const blurHandler = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex flex-col border-t-xlight-gray border-t">
      <div className="flex h-[3px] w-full shrink-0"></div>
      <div className="p-1 w-full flex items-center">
        {isFocused && (
          <div className="shrink-0">
            <CircleIconButton
              color="blue"
              hoverColor="blue"
              onClick={() => {}}
              icon={<ChevronLeftIcon className="text-blue rotate-180" />}
            />
          </div>
        )}

        {!isFocused && (
          <>
            <div className="shrink-0">
              <CircleIconButton
                color="blue"
                hoverColor="blue"
                onClick={() => {}}
                icon={<PictureIcon />}
              />
            </div>
            <div className="shrink-0">
              <CircleIconButton
                color="blue"
                hoverColor="blue"
                onClick={() => {}}
                icon={<GifIcon />}
              />
            </div>
          </>
        )}
        <MessageInput
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          isFocused={isFocused}
          inputText={inputText}
          setInputText={setInputText}
        />
        <div className="shrink-0">
          <CircleIconButton
            color="blue"
            hoverColor="blue"
            disabled={!(inputText.length > 0)}
            onClick={() => {}}
            icon={<SendMessageIcon />}
          />
        </div>
      </div>
    </div>
  );
}

function MessageInput({
  focusHandler,
  blurHandler,
  isFocused,
  inputText,
  setInputText,
}) {
  // const [isFocused, setIsFocused] = useState(false);
  // const [inputText, setInputText] = useState("");

  // const focusHandler = () => {
  //   setIsFocused(true);
  // };
  // const blurHandler = () => {
  //   setIsFocused(false);
  // };

  return (
    <div
      className=" relative flex grow items-center border  focus:outline-none  rounded-3xl overflow-hidden "
      style={{ borderColor: isFocused ? "#1d9bf0" : "" }}
    >
      <div
        onBlur={blurHandler}
        onFocus={focusHandler}
        onInput={(e) => {
          setInputText(e.currentTarget.innerText);
        }}
        className="text-sm z-10 focus:outline-none p-1 px-3 grow max-h-[170px] break-all overflow-y-auto"
        contentEditable
      ></div>
      <div
        className="absolute text-sm top-[7px] left-3 text-dark-gray"
        style={{ visibility: inputText.length > 0 ? "hidden" : "visible" }}
      >
        Start a new message
      </div>
      <div className="shrink-0 self-end">
        <CircleIconButton
          color="blue"
          hoverColor="blue"
          onClick={() => {}}
          icon={<EmojiIcon />}
        />
      </div>
    </div>
  );
}

function MyMessage({ message }) {
  const mainClass = `
  flex
  flex-col
  justify-end
  items-end
  pb-5
  group
  
  `;

  const dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <div className={mainClass}>
      <div className=" flex items-end">
        <div className="shrink-0 mx-1 invisible group-hover:visible">
          <CircleIconButton
            color="dark-gray"
            hoverColor="dark-gray"
            onClick={() => {}}
            icon={<ReactionIcon />}
          />
        </div>
        <div className="shrink-0 mx-1 invisible group-hover:visible">
          <CircleIconButton
            color="dark-gray"
            hoverColor="dark-gray"
            onClick={() => {}}
            icon={<EllipsisIcon />}
          />
        </div>
        <div className="bg-blue text-white px-4 py-3 flex rounded-2xl rounded-br-none ">
          {message.message}
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-dark-gray text-[13px] hover:cursor-pointer hover:underline">
          {new Date(message.time).toLocaleString("en-US", dateOptions)}
        </div>
        <div className="w-4 h-4 fill-blue">
          <CheckmarkIcon />
        </div>
      </div>
    </div>
  );
}

function OtherMessage({ message, image }) {
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const mainClass = `
  flex
  flex-col
  justify-end
  items-stretch
  pb-5
  group
  `;

  return (
    <div className={mainClass}>
      <div className="flex">
        <div className="w-[52px] flex justify-start items-end shrink-0">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={image} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className=" flex grow justify-start items-end">
          <div className="bg-xxlight-gray text-black px-4 py-3 flex rounded-2xl rounded-bl-none ">
            {message.message}
          </div>
          <div className="shrink-0 mx-1 invisible group-hover:visible">
            <CircleIconButton
              color="dark-gray"
              hoverColor="dark-gray"
              onClick={() => {}}
              icon={<ReactionIcon />}
            />
          </div>
          <div className="shrink-0 mx-1 invisible group-hover:visible">
            <CircleIconButton
              color="dark-gray"
              hoverColor="dark-gray"
              onClick={() => {}}
              icon={<EllipsisIcon />}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center pl-[52px]">
        <div className="text-dark-gray text-[13px] hover:cursor-pointer hover:underline">
          {new Date(message.time).toLocaleString("en-US", dateOptions)}
        </div>
      </div>
    </div>
  );
}

function UserDetail({ user }) {
  const dateOptions = {
    year: "numeric",
    month: "long",
  };
  const blackBold = " text-black font-bold ";
  return (
    <div className="hover:cursor-pointer flex flex-col gap-[2px] mt-[60px] mb-4 py-5 px-4 hover:bg-xxlight-gray border-b border-b-xxlight-gray text-dark-gray">
      <div className="flex grow justify-center items-center gap-1">
        <div className={" hover:underline  " + blackBold}>
          {user.display_name}
        </div>
        <div>@{user.username}</div>
      </div>
      <div className="grow text-center text-black">{user.bio}</div>
      <div className="flex grow justify-center items-center gap-5">
        <div>
          <span className={blackBold}>{customNum(user.followers)}</span>{" "}
          Followers
        </div>
        <div>
          <span className={blackBold}>{customNum(user.following)}</span>{" "}
          Following
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="fill-dark-gray w-5 h-5">
          <CalendarIcon />
        </div>
        <div>Joined</div>
        <div>{new Date(user.joined).toLocaleString("en-US", dateOptions)}</div>
      </div>
    </div>
  );
}
