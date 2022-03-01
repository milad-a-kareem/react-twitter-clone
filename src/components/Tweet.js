import React from "react";

import { ReactComponent as ElipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as ReplayIcon } from "../assets/icons/outline/replay.svg";
import { ReactComponent as LikeIcon } from "../assets/icons/outline/like.svg";
import { ReactComponent as RetweetIcon } from "../assets/icons/outline/retweet.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/outline/share.svg";

import { ReactComponent as VerifiedIcon } from "../assets/icons/verified.svg";

const Tweet = ({ verified }) => {
  return (
    <div className="p-4 flex justify-start items-start gap-3 hover:bg-xxlight-gray">
      <div className="w-12 h-12 rounded-full bg-blue shrink-0"></div>
      <div className="grow flex flex-col justify-start items-start">
        <div className="flex justify-between items-center h-6 w-full">
          <div className="flex items-center justify-start gap-1">
            <div className="flex gap-1 items-center">
              <span className="font-bold text-black">Display Name</span>
              {verified && (
                <div className="fill-blue w-5 h-5">
                  <VerifiedIcon />
                </div>
              )}
              <span className=" text-darck-gray text-ellipsis shrink break-all">
                @usrname
              </span>
            </div>
            <div className="px-[1px] text-darck-gray">·</div>
            <div>
              <span className=" text-darck-gray">1h</span>
            </div>
          </div>
          <button className="w-9 h-9 p-2 fill-dark-gray rounded-full hover:fill-blue hover:bg-blue/10">
            <ElipsisIcon />
          </button>
        </div>
        <div className="py-1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'.
        </div>
        <div className="flex justify-between items-center text-dark-gray w-full sm:w-[90%]">
          <button className="group flex items-center gap-1 hover:text-blue ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10">
              <ReplayIcon />
            </div>
            <div>7</div>
          </button>
          <button className="group flex items-center gap-1 hover:text-green ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-green group-hover:bg-green/10">
              <RetweetIcon />
            </div>
            <div>21</div>
          </button>
          <button className="group flex items-center gap-1 hover:text-red ">
            <div className="w-9 h-9 p-2 fill-dark-gray rounded-full group-hover:fill-red group-hover:bg-red/10">
              <LikeIcon />
            </div>
            <div>5</div>
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
