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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactionButton from "./ReactionButton";

function Replay({
  time,
  likes,
  replays,
  retweets,
  profileImage,
  display_name,
  verified,
  username,
  replayText,
  user,
}) {
  const me = useSelector((state) => state.user);
  const t = timeConvertor(time);
  const [likess, setLikess] = useState(likes);
  const [replayss, setReplays] = useState(replays);
  const [retweetss, setRetweets] = useState(retweets);
  return (
    <div className=" px-4 py-3 flex justify-start items-start gap-3 hover:bg-xxlight-gray border-b border-xlight-gray">
      <div className="basis-12 shrink-0 w-12 h-12 rounded-full bg-blue overflow-hidden">
        <img
          src={user.profileImage}
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
                  {user.display_name}
                </div>

                {verified && (
                  <div className="fill-blue w-5 h-5 shrink-0 basis-auto mx-1">
                    <VerifiedIcon />
                  </div>
                )}
                <div className="  truncate">
                  <span className="text-dark-gray  break-words inline  shrink-0 truncate">
                    @{user.username}
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
        <div className="flex justify-start items-center text-dark-gray">
          <span>Replaying to </span>
          <Link to={`/${me.username}`} className="text-blue">
            @{me.username}
          </Link>
        </div>
        <div className="py-1">
          <span>{replayText}</span>
        </div>

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
}

export default Replay;
