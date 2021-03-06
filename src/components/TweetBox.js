import { ReactComponent as EarthIcon } from "../assets/icons/outline/earth.svg";

import { ReactComponent as PictureIcon } from "../assets/icons/outline/picture.svg";
import { ReactComponent as GifIcon } from "../assets/icons/outline/gif.svg";
import { ReactComponent as PollIcon } from "../assets/icons/outline/poll.svg";
import { ReactComponent as SchedualIcon } from "../assets/icons/outline/schedual.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/outline/location.svg";
import { ReactComponent as EmojiIcon } from "../assets/icons/outline/emoji.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/outline/plus.svg";

import CustomInput from "../components/CustomInput";
import Progress from "./Progress";
import { useState } from "react";
import { useSelector } from "react-redux";

function TweetBox() {
  const limit = 280;
  const [inputLength, setInputLength] = useState(0);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const user = useSelector((state) => state.user);

  const showPrivacyButton = () => {
    setShowPrivacy(true);
  };

  const updateState = (newLength) => {
    setInputLength(newLength);
  };
  return (
    <div className="w-full p-4 flex box-border border-b border-xlight-gray pb-0 ">
      <div className="w-[48px] h-[48px] bg-blue rounded-full mr-3 shrink-0 overflow-hidden">
        <img
          width="100%"
          height="100%"
          src={user.profileImage}
          alt=""
          srcSet=""
        />
      </div>
      <div className="grow flex flex-col ">
        <CustomInput
          updateLength={updateState}
          showHandler={showPrivacyButton}
        />
        <div className="w-full border-b border-xlight-gray pb-3">
          {showPrivacy && (
            <button className="-ml-3 flex justify-start items-center rounded-full hover:bg-blue/10 px-3 text-blue font-bold gap-2">
              <div className="w-4 h-4 fill-blue">
                <EarthIcon />
              </div>
              <div>
                <span>Everyone can reply</span>
              </div>
            </button>
          )}
        </div>
        <div className="w-full flex-wrap flex justify-between items-center py-3 ">
          <div className="flex">
            <CustomIcon icon={<PictureIcon />} />
            <CustomIcon icon={<GifIcon />} />
            <CustomIcon icon={<PollIcon />} />
            <CustomIcon icon={<EmojiIcon />} />
            <CustomIcon icon={<SchedualIcon />} />
            <CustomIcon icon={<LocationIcon />} disabled />
          </div>
          <div className="flex justify-end items-center gap-3">
            {inputLength > 1 && (
              <div className="relative flex justify-center items-center">
                <div
                  className={`${
                    limit - inputLength < 21 ? "h-8" : "h-5"
                  } -rotate-90 relative`}
                >
                  {limit - inputLength > -9 && (
                    <Progress percent={inputLength / limit} />
                  )}
                </div>
                {limit - inputLength < 21 && (
                  <div
                    className={`${
                      limit - inputLength > -9 && "absolute left-0 top-0"
                    } text-xs w-full h-full flex justify-center items-center ${
                      limit - inputLength < 0 && "text-red"
                    }`}
                  >
                    {limit - inputLength}
                  </div>
                )}
              </div>
            )}
            {inputLength > 1 && (
              <div className="w-[1px] h-[31px] bg-black/30"></div>
            )}
            {inputLength > 1 && (
              <div className="w-6 h-6 flex justify-center items-center rounded-full border border-light-gray/60 hover:bg-blue/10">
                <PlusIcon className="w-4 fill-blue" />
              </div>
            )}
            <button
              disabled={inputLength < 1}
              className="disabled:bg-blue/30 bg-blue hover:bg-dark-blue p-2 px-4 rounded-full font-bold text-white fixed top-3 right-3 sm:static"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;

const CustomIcon = ({ icon, disabled }) => {
  return (
    <button
      className="w-[34px] h-[34px] hover:bg-blue/10 flex justify-center items-center rounded-full fill-blue disabled:fill-blue/50 disabled:hover:bg-transparent"
      disabled={disabled}
    >
      <div className="w-5 h-5">{icon}</div>
    </button>
  );
};
