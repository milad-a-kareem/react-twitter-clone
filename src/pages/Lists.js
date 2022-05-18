import React from "react";
import { useSelector } from "react-redux";
import BackdropBlur from "../components/BackdropBlur";
import CircleIconButton from "../components/CircleIconButton";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import PageTitle from "../components/PageTitle";

import { ReactComponent as BackIcon } from "../assets/icons/outline/left-arrow.svg";
import { ReactComponent as AddListIcon } from "../assets/icons/outline/addList.svg";
import { ReactComponent as EllipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as ListssIcon } from "../assets/icons/outline/lists.svg";

import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import TrendsForYou from "../components/TrendsForYou";
import WhoToFollow from "../components/WhoToFollow";
import FooterLinks from "../components/FooterLinks";
import Seperator from "../components/Sperator";

import users from "../data/users";

function Lists() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <MainLeft>
        <BackdropBlur>
          <div className="flex items-center justify-start gap-[26px] ">
            <div className="flex -translate-x-1">
              <CircleIconButton
                icon={<BackIcon />}
                color="black"
                hoverColor={"black"}
                onClick={() => {
                  navigate(-1);
                }}
              />
            </div>
            <div className="flex flex-col">
              <PageTitle>Lists</PageTitle>
              <div className="text-xs text-black/80">@{user.username}</div>
            </div>
          </div>
          <div className="flex ">
            <div className="hidden sm:flex">
              <CircleIconButton
                icon={<AddListIcon />}
                color="black"
                hoverColor={"black"}
              />
            </div>
            <CircleIconButton
              icon={<EllipsisIcon />}
              color="black"
              hoverColor={"black"}
            />
          </div>
        </BackdropBlur>
        <h2 className="text-xl font-bold px-4 py-3">Pinned Lists</h2>
        <div className="text-sm p-8 text-black/80">
          Nothing to see here yet — pin your favorite Lists to access them
          quickly.
        </div>

        <Seperator />
        <h2 className="text-xl font-bold px-4 py-3">Discover new Lists</h2>
        <ListItem
          bgColor="#fdba74"
          iconColor="#fb923c"
          user={users[0]}
          title="ReactJS"
        />
        <ListItem
          bgColor="#86efac"
          iconColor="#4ade80"
          user={users[1]}
          title="Angular"
        />
        <ListItem
          bgColor="#38bdf8"
          iconColor="#7dd3fc"
          user={users[6]}
          title="KeyU"
        />
        <div className="flex text-blue text-sm cursor-pointer px-4 py-3 hover:bg-xlight-gray">
          Show more
        </div>

        <Seperator />
        <h2 className="text-xl font-bold px-4 py-3 ">Your Lists</h2>
        <div className="text-sm p-8 text-black/80">
          You haven't created or followed any Lists. When you do, they'll show
          up here.
        </div>
      </MainLeft>
      <MainRight>
        <div className="h-full min-h-[1024px] flex flex-col shrink-0">
          <div
            // style={isScrolled ? { top: "-300px" } : { top: "-300px" }}
            style={{ top: "-300px" }}
            className="flex flex-col sticky "
          >
            <div className="block h-full overflow-y-auto">
              <div
                className="backdrop-blur-md w-[290px] 
  min-w-[290px] 
  lg2:w-[350px] 
  xl:min-w-[350px]   fixed top-0 h-[53px] bg-white/90 flex justify-between items-center z-10"
              >
                <SearchBar />
              </div>
              <h1 className="h-[14px] w-[14px]"> </h1>
              <div className="mt-14"></div>
              <TrendsForYou />
              <WhoToFollow />

              <FooterLinks />
            </div>
          </div>
        </div>
      </MainRight>
    </>
  );
}

export default Lists;

function ListItem({ user, title, iconColor, bgColor }) {
  const classes = `
  w-12 
  h-12 
  rounded-xl 
  overflow-hidden 
  shrink-0 
  p-[10px]
  `;
  return (
    <div className="flex px-4 py-3 items-center hover:bg-xlight-gray overflow-hidden">
      <div className="flex gap-4 w-10 min-w-0 max-w-full grow shrink overflow-hidden">
        <div className={classes} style={{ backgroundColor: bgColor }}>
          <ListssIcon style={{ fill: iconColor }} />
        </div>
        <div className="flex flex-col items-start text-sm justify-center overflow-hidden">
          <div className="font-bold">{title}</div>
          <div className="flex gap-1 items-center text-[13px] min-w-0 max-w-full  shrink  justify-start overflow-hidden">
            <div className="w-4 h-4 rounded-full overflow-hidden bg-blue shrink-0">
              <img src={user.profileImage} alt="" className="w-full h-full" />
            </div>
            <div className="font-bold truncate shrink min-w-0 break-words ">
              <span>{user.display_name}</span>
            </div>
            <div className="truncate shrink min-w-0 break-words ">
              <span>@{user.username}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-4 rounded-full bg-black hover:bg-black/90 cursor-pointer px-4 text-white font-bold text-sm h-[32px] items-center">
        Follow
      </div>
    </div>
  );
}
