import { useState } from "react";
import CircleIconButton from "./CircleIconButton";
import PageTitle from "./PageTitle";
import { ReactComponent as ComposeIcon } from "../assets/icons/outline/compose.svg";
import { ReactComponent as CollapseIcon } from "../assets/icons/outline/collapse.svg";
import conversations from "../data/conversations";
import ConversationItem from "./ConversationItem";

function MessagesWindow() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const mainClasses = isOpen
    ? "hidden lg2:flex flex-col items-stretch h-[71vh] min-w-[350px] max-w-[400px] fixed bottom-0 right-0 mr-5 bg-white rounded-t-2xl overflow-hidden shadow-a transition-all duration-500"
    : "hidden lg2:flex flex-col items-stretch h-14 min-w-[350px] max-w-[400px] fixed bottom-0 right-0 mr-5 bg-white rounded-t-2xl overflow-hidden shadow-a transition-all duration-500";
  return (
    <div className={mainClasses}>
      <div className="flex absolute top-0 left-0 backdrop-blur-md w-full h-14 bg-white/90 justify-between items-center p-4 z-10 ">
        <PageTitle>Messages</PageTitle>
        <div className="flex justify-end items-center">
          <CircleIconButton
            color="black"
            hoverColor="black"
            icon={<ComposeIcon />}
          />
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
      {isOpen && (
        <div className="mt-12 h-full overflow-y-auto flex flex-col items-stretch justify-start">
          {conversations.map((conv) => {
            return (
              <ConversationItem
                key={conv.user.username}
                {...conv}
              ></ConversationItem>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MessagesWindow;
