import React, { useState } from "react";

import { ReactComponent as ElipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as ReplayIcon } from "../assets/icons/outline/replay.svg";
import { ReactComponent as LikeIcon } from "../assets/icons/outline/like.svg";
import { ReactComponent as RetweetIcon } from "../assets/icons/outline/retweet.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/outline/share.svg";

import { ReactComponent as VerifiedIcon } from "../assets/icons/verified.svg";

import { timeConvertor } from "../time";

const Tweet = ({
  verified,
  display_name,
  username,
  profileImage,
  tweetText,
  time,
  likes,
  retweets,
  replays,
}) => {
  const t = timeConvertor(time);
  const [likess, setLikess] = useState(likes);
  const [replayss, setReplays] = useState(replays);
  const [retweetss, setRetweets] = useState(retweets);
  return (
    <div className="p-4 flex justify-start items-start gap-3 hover:bg-xxlight-gray border-b border-xlight-gray">
      <div className="shrink-0 w-12 h-12 rounded-full bg-blue overflow-hidden">
        <img
          src={profileImage}
          alt="profile"
          srcSet=""
          className="w-full h-full"
        />
      </div>
      <div className=" w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center h-6">
          <div className="flex items-center justify-start gap-1">
            <div className="flex justify-start gap-1 items-center">
              <span className="font-bold text-black">{display_name}</span>
              {verified && (
                <div className="fill-blue w-5 h-5">
                  <VerifiedIcon />
                </div>
              )}
              <span className=" text-darck-gray text-ellipsis shrink break-all">
                @{username}
              </span>
            </div>
            <div className="px-[1px] text-darck-gray">·</div>
            <div>
              <span className=" text-darck-gray">{t}</span>
            </div>
          </div>
          <button className="w-9 h-9 p-2 fill-dark-gray rounded-full hover:fill-blue hover:bg-blue/10">
            <ElipsisIcon />
          </button>
        </div>
        <div className="py-1">
          <span>{tweetText}</span>
        </div>
        <div className="flex justify-between items-center text-dark-gray w-full sm:w-[90%]">
          <button className="group flex items-center gap-1 hover:text-blue ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10">
              <ReplayIcon />
            </div>
            <div>{replayss}</div>
          </button>
          <button className="group flex items-center gap-1 hover:text-green ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-green group-hover:bg-green/10">
              <RetweetIcon />
            </div>
            <div>{retweetss}</div>
          </button>
          <button className="group flex items-center gap-1 hover:text-red ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-red group-hover:bg-red/10">
              <LikeIcon />
            </div>
            <div>{likess}</div>
          </button>
          <button className="group flex items-center gap-1 hover:text-blue ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10">
              <ShareIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
