import React, { useState } from "react";

import { ReactComponent as ElipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as ReplayIcon } from "../assets/icons/outline/replay.svg";
import { ReactComponent as LikeIcon } from "../assets/icons/outline/like.svg";
import { ReactComponent as RetweetIcon } from "../assets/icons/outline/retweet.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/outline/share.svg";

import { ReactComponent as VerifiedIcon } from "../assets/icons/verified.svg";

import { timeConvertor } from "../utility/time";
import { customNum } from "../utility/number";
import CircleIconButton from "./CircleIconButton";
import ReactionButton from "./ReactionButton";

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
  images,
  hashtags,
}) => {
  const t = timeConvertor(time);
  const [likess, setLikess] = useState(likes);
  const [replayss, setReplays] = useState(replays);
  const [retweetss, setRetweets] = useState(retweets);
  return (
    <div className="p-4 flex justify-start items-start gap-3 hover:bg-xxlight-gray border-b border-xlight-gray">
      <div className="basis-12 shrink-0 w-12 h-12 rounded-full bg-blue overflow-hidden">
        <img
          src={profileImage}
          alt="profile"
          srcSet=""
          className="w-full h-full"
        />
      </div>
      <div className="min-w-0 flex flex-col justify-start items-stretch max-w-full grow">
        <div className="max-w-full flex justify-between items-center h-6 shrink ">
          <div className="w-10 grow max-w-full shrink flex items-center justify-start gap-1  overflow-hidden">
            <div className="  shrink flex justify-start gap-1 items-center  overflow-hidden">
              <div className="min-w-0 max-w-full gap-[2px] shrink flex justify-start items-center overflow-hidden">
                <div className=" break-words font-bold truncate ">
                  {display_name}
                </div>

                {verified && (
                  <div className="fill-blue w-5 h-5 shrink-0 basis-auto mx-1">
                    <VerifiedIcon />
                  </div>
                )}
                <div className="  truncate">
                  <span className="text-dark-gray  break-words inline  shrink-0 truncate">
                    @{username}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-[1px] text-dark-gray shrink-0 flex basis-auto">
              ·
            </div>
            <div className="flex text-dark-gray shrink-0">
              <span>{t}</span>
            </div>
          </div>
          <CircleIconButton
            color="dark-gray"
            hoverColor="blue"
            icon={<ElipsisIcon />}
          />
        </div>
        <div className="py-1 text-[15px]">
          <span style={{ whiteSpace: "pre-wrap" }} className="break-normal">
            {tweetText}
          </span>
          <br />
          {hashtags && hashtags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {hashtags.map((h) => (
                <div
                  className="text-blue hover:underline cursor-pointer"
                  key={h}
                >
                  {h}
                </div>
              ))}
            </div>
          )}
        </div>
        {images && images.length > 0 && (
          <div className="rounded-[15px] overflow-hidden my-2">
            <img src={images[0]} alt="tweet" srcSet="" className="w-full" />
          </div>
        )}
        <div className=" min-w-0 max-w-full shrink flex justify-between items-center text-dark-gray w-full sm:w-[90%]">
          <ReactionButton
            color="blue"
            icon={<ReplayIcon />}
            number={customNum(replayss)}
          />
          <ReactionButton
            color="green"
            icon={<RetweetIcon />}
            number={customNum(retweetss)}
          />
          <ReactionButton
            color="red"
            icon={<LikeIcon />}
            number={customNum(likess)}
          />
          <ReactionButton color="blue" icon={<ShareIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
