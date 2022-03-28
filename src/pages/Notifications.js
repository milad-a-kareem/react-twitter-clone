import { ReactComponent as SettingsIcon } from "../assets/icons/outline/settings.svg";
import { useEffect, useState, useCallback } from "react";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";

import TrendsForYou from "../components/TrendsForYou";
import WhoToFollow from "../components/WhoToFollow";
import SearchBar from "../components/SearchBar";
import FooterLinks from "../components/FooterLinks";
import BackdropBlur from "../components/BackdropBlur";
import PageTitle from "../components/PageTitle";
import CircleIconButton from "../components/CircleIconButton";
import MobileMenuIcon from "../components/MobileMenuIcon";
import { Link, useLocation } from "react-router-dom";

function Notifications() {
  const { pathname } = useLocation();
  const match = pathname === "/notifications/mentions" ? "m" : "a";
  return (
    <>
      <MainLeft>
        <BackdropBlur col>
          <div className="h-14 p-4  flex justify-between items-center">
            <div className="flex items-center justify-start gap-[26px] ">
              <MobileMenuIcon />
              <PageTitle>Notifications</PageTitle>
            </div>
            <CircleIconButton
              color="black"
              hoverColor="black"
              icon={<SettingsIcon />}
            />
          </div>
          <div className="flex items-center h-14 ">
            <Link
              to="/notifications"
              className="grow flex justify-center items-center hover:bg-dark-gray/20 h-full relative font-semibold"
            >
              {match === "a" ? (
                <span>All</span>
              ) : (
                <span className="text-dark-gray">All</span>
              )}
              {match === "a" && (
                <div className="absolute bottom-0 h-1 min-w-[56px] rounded-full bg-blue"></div>
              )}
            </Link>
            <Link
              to="/notifications/mentions"
              className="grow flex justify-center items-center hover:bg-dark-gray/20 h-full relative font-semibold"
            >
              {match === "m" ? (
                <span>Mentions</span>
              ) : (
                <span className="text-dark-gray">Mentions</span>
              )}
              {match === "m" && (
                <div className="absolute bottom-0 h-1 min-w-[56px] rounded-full bg-blue"></div>
              )}
            </Link>
          </div>
        </BackdropBlur>

        {/* tabs */}
        <div className="flex flex-col w-full items-stretch justify-start ">
          <div className="flex flex-col justify-start items-stretch"></div>
        </div>

        <div className="w-full h-14 flex xs:hidden"></div>
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

export default Notifications;
