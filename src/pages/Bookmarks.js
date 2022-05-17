import React from "react";
import { useSelector } from "react-redux";
import BackdropBlur from "../components/BackdropBlur";
import CircleIconButton from "../components/CircleIconButton";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import PageTitle from "../components/PageTitle";

import bookImage from "../assets/images/book-in-bird-cage.png";

import { ReactComponent as BackIcon } from "../assets/icons/outline/left-arrow.svg";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import TrendsForYou from "../components/TrendsForYou";
import WhoToFollow from "../components/WhoToFollow";
import FooterLinks from "../components/FooterLinks";

function Bookmarks() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <MainLeft>
        <BackdropBlur>
          <div className="flex items-center justify-start gap-[26px] ">
            <div className="flex sm:hidden">
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
              <PageTitle>Bookmarks</PageTitle>
              <div className="text-xs text-black/80">@{user.username}</div>
            </div>
          </div>
        </BackdropBlur>
        <div className="w-full px-[30px] flex flex-col items-stretch">
          <div className="max-w-[600px] flex shrink basis-0 h-1"></div>
          <div className="max-w-[380px] w-full mx-auto mb-9">
            <img src={bookImage} alt="" className="py-10" />
            <div className="flex flex-col ">
              <div className="text-[29px] font-bold">Save Tweets for later</div>
              <div className="text-sm ">
                Don’t let the good ones fly away! Bookmark Tweets to easily find
                them again in the future.
              </div>
            </div>
          </div>
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

export default Bookmarks;
