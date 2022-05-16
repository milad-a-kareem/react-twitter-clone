import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Modals/Backdrop";
import CircleIconButton from "./CircleIconButton";

import { ReactComponent as CloseIcon } from "../assets/icons/outline/close.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/outline/plus.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/outline/profile.svg";
import { ReactComponent as ListsIcon } from "../assets/icons/outline/lists.svg";
import { ReactComponent as TopicsIcon } from "../assets/icons/outline/topics.svg";
import { ReactComponent as BookmarksIcon } from "../assets/icons/outline/bookmarks.svg";
import { ReactComponent as MomentsIcon } from "../assets/icons/outline/moments.svg";
import { ReactComponent as NewslettersIcon } from "../assets/icons/outline/newsletters.svg";

import { ReactComponent as RocketIcon } from "../assets/icons/outline/rocket.svg";
import { ReactComponent as AdsIcon } from "../assets/icons/outline/ads.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/outline/analytics.svg";

import { ReactComponent as SettingsIcon } from "../assets/icons/outline/settings.svg";
import { ReactComponent as HelpIcon } from "../assets/icons/outline/help.svg";

import { ReactComponent as DisplayIcon } from "../assets/icons/outline/display.svg";
import { ReactComponent as DataSaverIcon } from "../assets/icons/outline/dataSaver.svg";
import { ReactComponent as DataSaverOnIcon } from "../assets/icons/filled/dataSaver.svg";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Seperator from "./Sperator";

function MobileMenu({ onClick }) {
  const onCloseHandler = () => {
    onClick();
  };
  return (
    <>
      {createPortal(
        <Backdrop onClick={onCloseHandler} black />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <MobileMenuComponent onCloseHandler={onCloseHandler} />,
        document.getElementById("mobile-menu")
      )}
    </>
  );
}

export default MobileMenu;

function MobileMenuComponent({ onCloseHandler }) {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex flex-col h-full w-[280px] z-50 bg-white fixed left-0 top-0 transition-all">
      <div className="flex h-[53px] items-center justify-between w-full px-4">
        <div className="font-bold text-[17px]">Account Info</div>
        <CircleIconButton
          color="black"
          hoverColor="black"
          onClick={onCloseHandler}
          icon={<CloseIcon />}
        />
      </div>
      <div
        onScroll={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col w-full overflow-y-auto h-full "
      >
        <div className="p-4 flex flex-col text-black/80">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-blue">
              <img src={user.profileImage} alt="" className="w-full h-full" />
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-light-gray/60">
              <div className="w-[18px]">
                <PlusIcon className="fill-black" />
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-1 text-sm">
            <div className="font-bold text-black ">{user.display_name}</div>
            <div>@{user.username}</div>
          </div>
          <div className="flex pt-3 text-sm gap-5">
            <div className="flex gap-[5px]">
              <div className="font-bold text-black">{user.following}</div>
              <div>{" Following"}</div>
            </div>
            <div className="flex gap-[5px]">
              <div className="font-bold text-black">{user.followers}</div>
              <div>{" Followers"}</div>
            </div>
          </div>
        </div>

        <CustomLink
          to={"/" + user.username}
          label="Profile"
          icon={<ProfileIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/lists"
          label="Lists"
          icon={<ListsIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/topics"
          label="Topics"
          icon={<TopicsIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/bookmars"
          label="Bookmarks"
          icon={<BookmarksIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/moments"
          label="Moments"
          icon={<MomentsIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/newsletters"
          label="Newsletters"
          icon={<NewslettersIcon className="w-full h-full" />}
        />
        <Seperator />
        <CustomLink
          to="/i/flow/convert_to_professional"
          label="Twitter for Professionals"
          icon={<RocketIcon className="w-full h-full" />}
        />
        <CustomLink
          to="https://ads.twitter.com"
          label="Twitter Ads"
          icon={<AdsIcon className="w-full h-full" />}
          external
        />
        <CustomLink
          to="https://analytics.twitter.com"
          label="Analytics"
          icon={<AnalyticsIcon className="w-full h-full" />}
          external
        />
        <Seperator />
        <CustomLink
          to="/settings"
          label="Settings and privacy"
          icon={<SettingsIcon className="w-full h-full" />}
        />
        <CustomLink
          to="/help"
          label="Help Center"
          icon={<HelpIcon className="w-full h-full" />}
        />
        <Seperator />
        <DataSaver />
        <CustomLink
          to="/i/display"
          label="Display"
          icon={<DisplayIcon className="w-full h-full" />}
        />
        <Seperator />
        <div className="p-4 text-sm">Log out</div>
      </div>
    </div>
  );
}

function CustomLink({ to, label, icon, external }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className="p-4 flex items-center justify-start gap-3 text-sm"
      >
        <div className="flex h-[19px] w-[18.75px]">{icon}</div>
        <div>{label}</div>
      </a>
    );
  } else {
    return (
      <Link
        to={to}
        className="p-4 flex items-center justify-start gap-3 text-sm"
      >
        <div className="flex h-[19px] w-[18.75px]">{icon}</div>
        <div>{label}</div>
      </Link>
    );
  }
}

function DataSaver() {
  const [isOn, setIsOn] = useState(false);
  const switchRef = useRef();
  const bgRef = useRef();
  const toggle = () => {
    setIsOn((prev) => {
      if (!prev) {
        switchRef.current.style.left = "20px";
        bgRef.current.style.width = "100%";
      } else {
        switchRef.current.style.left = 0;
        bgRef.current.style.width = 0;
      }
      return !prev;
    });
  };
  return (
    <div className="p-4 flex items-center justify-between  text-sm">
      <div className="flex items-center justify-start gap-3">
        <div className="flex h-[19px] w-[18.75px]">
          {!isOn && <DataSaverIcon className="w-full h-full" />}
          {isOn && <DataSaverOnIcon className="w-full h-full" />}
        </div>
        <div>Data Saver</div>
      </div>
      <div onClick={toggle} className="flex shrink-0 items-center relative">
        <div className="w-10 h-[14px] bg-dark-gray/70 flex rounded-full overflow-hidden">
          <div
            ref={bgRef}
            className="bg-blue w-0 h-full transition-all duration-500 ease-in-out"
          ></div>
        </div>
        <div
          ref={switchRef}
          className="w-5 h-5 shrink-0 absolute left-0 bg-white shadow-s rounded-full overflow-hidden transition-all duration-500 ease-in-out"
        ></div>
      </div>
    </div>
  );
}
