import React from "react";
import { ReactComponent as VerifiedIcon } from "../assets/icons/verified.svg";

function WhoToFollow() {
  const onShowMore = () => {};
  return (
    <div className="bg-dark-gray/5 w-full rounded-2xl flex flex-col overflow-hidden mt-5">
      <div className="text-xl font-bold w-full px-4 py-3 flex justify-between items-center min-h-[35px]">
        <h2>Who to follow</h2>
      </div>

      <Follower verified />
      <Follower />

      <button
        onClick={onShowMore}
        className="text-blue p-4 hover:bg-dark-gray/10 flex justify-start items-center"
      >
        Show more
      </button>
    </div>
  );
}

export default WhoToFollow;

function Follower({ verified }) {
  return (
    <div className="p-4 flex justify-start items-center gap-3 hover:bg-dark-gray/10 ">
      <div className="shrink-0 w-12 h-12 rounded-full bg-blue "></div>
      <div className=" w-full flex flex-col justify-start items-start">
        <div className="flex flex-col items-center justify-start gap-1">
          <div className="flex   justify-start gap-1 items-center">
            <span className="font-bold text-black">Display Name</span>
            {verified && (
              <div className="fill-blue w-5 h-5">
                <VerifiedIcon />
              </div>
            )}
          </div>
        </div>
        <span className=" text-darck-gray text-ellipsis shrink break-all">
          @username
        </span>
      </div>
      <button className="text-white font-bold py-1 px-4 bg-black rounded-full  hover:bg-black/80">
        Follow
      </button>
    </div>
  );
}
