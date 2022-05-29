import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackdropBlur from "../components/BackdropBlur";
import CircleIconButton from "../components/CircleIconButton";
import MainLeft from "../components/MainLeft";
import PageTitle from "../components/PageTitle";

import { ReactComponent as BackIcon } from "../assets/icons/outline/left-arrow.svg";
import { ReactComponent as LinkIcon } from "../assets/icons/outline/link.svg";
import { ReactComponent as BaloonIcon } from "../assets/icons/outline/baloon.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/outline/calendar.svg";

import MainRight from "../components/MainRight";
import SearchBar from "../components/SearchBar";
import TrendsForYou from "../components/TrendsForYou";
import WhoToFollow from "../components/WhoToFollow";
import FooterLinks from "../components/FooterLinks";
import { timeConvertor } from "../utility/time";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateOptions2 = {
    year: "numeric",
    month: "long",
    // day: "numeric",
  };
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
              <PageTitle>{user.display_name}</PageTitle>
              <div className="text-xs text-black/80">
                {user.tweets.length} Tweet{user.tweets.length > 1 && "s"}
              </div>
            </div>
          </div>
        </BackdropBlur>
        <div className="flex flex-col">
          <div
            className="pb-[33%] "
            style={{
              backgroundImage: `url(${user.cover_image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col px-4 pt-3 mb-4">
            <div className="flex justify-between flex-wrap">
              <div className="block shrink-0 w-[25%] min-w-[46px] mb-3 -mt-[15%] aspect-square bg-white rounded-full relative">
                <div
                  style={{
                    backgroundImage: `url(${user.profileImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                  className="bg-blue shrink-0  flex w-[calc(100%-3px)] h-[calc(100%-3px)] sm:w-[calc(100%-9px)] sm:h-[calc(100%-9px)] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>
              <div className="flex mb-3 rounded-full border px-4 cursor-pointer h-[34px] items-center font-bold text-sm">
                Edit Profile
              </div>
            </div>
            <div className="flex flex-col mt-1 mb-3 items-stretch">
              <div className="flex text-black font-bold text-lg">
                {user.display_name}
              </div>
              <div className="flex text-sm text-dark-gray">
                @{user.username}
              </div>
            </div>
            <div className="flex mb-3 text-sm text-black">{user.bio}</div>
            <div className="flex mb-3 flex-wrap ">
              {user.website && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={user.website}
                  className="group flex gap-1 mr-3"
                >
                  <div className="w-5 h-5 shrink-0 fill-dark-gray">
                    <LinkIcon />
                  </div>
                  <div className="text-blue text-[15px] group-hover:underline">
                    {new URL(user.website).hostname}
                  </div>
                </a>
              )}
              {user.birthday && (
                <div className=" flex gap-1 mr-3">
                  <div className="w-5 h-5 shrink-0 fill-dark-gray">
                    <BaloonIcon />
                  </div>
                  <div className=" text-[15px] text-dark-gray">
                    Born{" "}
                    {new Date(user.birthday).toLocaleString(
                      "en-US",
                      dateOptions
                    )}
                  </div>
                </div>
              )}
              {user.joined && (
                <div className=" flex gap-1 mr-3">
                  <div className="w-5 h-5 shrink-0 fill-dark-gray">
                    <CalendarIcon />
                  </div>
                  <div className=" text-[15px] text-dark-gray">
                    Joined{" "}
                    {new Date(user.joined).toLocaleString(
                      "en-US",
                      dateOptions2
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap">
              <div className="mr-5 text-sm text-dark-gray">
                <span className="font-bold text-black">{user.following}</span>{" "}
                Following
              </div>
              <div className=" text-sm text-dark-gray">
                <span className="font-bold text-black">{user.followers}</span>{" "}
                Followers
              </div>
            </div>
          </div>
        </div>
      </MainLeft>
      <MainRight>
        <div className="h-full min-h-[1024px] flex flex-col shrink-0">
          <div style={{ top: "-300px" }} className="flex flex-col sticky ">
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

export default Profile;
