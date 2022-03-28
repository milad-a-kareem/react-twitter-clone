import React from "react";
import BackdropBlur from "../components/BackdropBlur";
import CircleIconButton from "../components/CircleIconButton";
import FooterLinks from "../components/FooterLinks";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import SearchBar from "../components/SearchBar";
import WhoToFollow from "../components/WhoToFollow";
import covidImage from "../assets/images/covid.jfif";

import { ReactComponent as SettingsIcon } from "../assets/icons/outline/settings.svg";
import MobileMenuIcon from "../components/MobileMenuIcon";
import TrendsForYou from "../components/TrendsForYou";

function Explore() {
  return (
    <>
      <MainLeft>
        <BackdropBlur>
          <div className="flex justify-start items-center w-14 shrink-0 sm:hidden">
            <MobileMenuIcon />
          </div>
          <SearchBar />
          <div className="flex justify-end items-center w-14 shrink-0">
            <CircleIconButton
              color="black"
              hoverColor="black"
              icon={<SettingsIcon />}
            />
          </div>
        </BackdropBlur>
        <div className="max-w-full relative flex">
          <img src={covidImage} alt="covid-19" className="w-full" />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `linear-gradient(0deg, rgba(0,0,0,0.8) 10%, rgba(1,208,216,0) 80%)`,
            }}
          ></div>
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end items-start px-4 py-3 text-white">
            <div className="text-xs">Event · LIVE</div>
            <div className="text-2xl font-bold">COVID-19 in Iraq</div>
          </div>
        </div>
        <TrendsForYou main />
        <div className="w-full h-14 flex xs:hidden"></div>
      </MainLeft>

      <MainRight>
        <div className="h-full min-h-[400px] flex flex-col shrink-0">
          <div
            // style={isScrolled ? { top: "-300px" } : { top: "-300px" }}
            style={{ top: "0px" }}
            className="flex flex-col sticky "
          >
            <div className="block h-full overflow-y-auto">
              <WhoToFollow />

              <FooterLinks />
            </div>
          </div>
        </div>
      </MainRight>
    </>
  );
}

export default Explore;
