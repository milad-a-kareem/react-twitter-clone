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

function TweetBox() {
  const limit = 280;
  const [inputLength, setInputLength] = useState(0);

  const updateState = (newLength) => {
    setInputLength(newLength);
  };
  return (
    <div className="w-full p-4 flex box-border border-b border-xlight-gray pb-0">
      <div className="w-[48px] h-[48px] bg-blue rounded-full mr-3 shrink-0"></div>
      <div className="grow flex flex-col ">
        <CustomInput updateLength={updateState} />
        <div className="w-full border-b border-xlight-gray pb-3">
          <button className="-ml-3 flex justify-start items-center rounded-full hover:bg-blue/10 px-3 text-blue font-bold gap-2">
            <div className="w-4 h-4 fill-blue">
              <EarthIcon />
            </div>
            <div>
              <span>Everyone can reply</span>
            </div>
          </button>
        </div>
        <div className="w-full  flex justify-between items-center py-3 ">
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
              <div className="h-5 -rotate-90">
                <Progress percent={inputLength / limit} />
              </div>
            )}
            <div className="w-[1px] h-[31px] bg-black/30"></div>
            <div className="w-6 h-6 flex justify-center items-center rounded-full border border-light-gray/60 hover:bg-blue/10">
              <PlusIcon className="w-4 fill-blue" />
            </div>
            <button className="bg-blue hover:bg-dark-blue p-2 px-4 rounded-full font-bold text-white">
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
