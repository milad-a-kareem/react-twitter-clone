import React from "react";
import BackdropBlur from "../components/BackdropBlur";
import CircleIconButton from "../components/CircleIconButton";
import FooterLinks from "../components/FooterLinks";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import SearchBar from "../components/SearchBar";
import WhoToFollow from "../components/WhoToFollow";

import { ReactComponent as SettingsIcon } from "../assets/icons/outline/settings.svg";
import MobileMenuIcon from "../components/MobileMenuIcon";

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
        <div className="w-full h-10"></div>
      </MainLeft>

      <MainRight>
        <div className="h-full min-h-full flex flex-col shrink-0">
          <div
            // style={isScrolled ? { top: "-300px" } : { top: "-300px" }}
            // style={{ top: "-300px" }}
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
