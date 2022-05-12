import React from "react";
import { timeConvertor } from "../utility/time";
import CircleIconButton from "./CircleIconButton";
import { ReactComponent as VerifiedIcon } from "../assets/icons/verified.svg";
import { ReactComponent as ElipsisIcon } from "../assets/icons/outline/ellipsis.svg";

function ConversationItem({ user, messages, onClick }) {
  const t = timeConvertor(messages[0].time);
  const openMenu = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => {
        onClick(user.username);
      }}
      className="group p-4 flex justify-start items-start gap-3 hover:bg-xxlight-gray  cursor-pointer"
    >
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
                <div className=" font-bold shrink-0 ">{user.display_name}</div>

                {user.verified && (
                  <div className="fill-blue w-5 h-5 shrink-0 basis-auto mx-1">
                    <VerifiedIcon />
                  </div>
                )}
                <div className="  truncate ">
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
          <div className="hidden group-hover:flex">
            <CircleIconButton
              color="dark-gray"
              hoverColor="blue"
              onClick={openMenu}
              icon={<ElipsisIcon />}
            />
          </div>
        </div>
        <div className="py-[2px] text-dark-gray truncate">
          <span>{messages[0].message}</span>
        </div>
      </div>
    </div>
  );
}

export default ConversationItem;
