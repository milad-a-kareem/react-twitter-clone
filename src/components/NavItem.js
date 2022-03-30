import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { ReactComponent as HomeO } from "../assets/icons/outline/home.svg";
import { ReactComponent as HomeF } from "../assets/icons/filled/home.svg";

import { ReactComponent as NotificationsO } from "../assets/icons/outline/notification.svg";
import { ReactComponent as NotificationsF } from "../assets/icons/filled/notification.svg";

import { ReactComponent as MessagesO } from "../assets/icons/outline/mail.svg";
import { ReactComponent as MessagesF } from "../assets/icons/filled/messages.svg";

import { ReactComponent as BookmarksO } from "../assets/icons/outline/bookmarks.svg";
import { ReactComponent as BookmarksF } from "../assets/icons/filled/bookmarks.svg";

import { ReactComponent as ListsO } from "../assets/icons/outline/lists.svg";
import { ReactComponent as ListsF } from "../assets/icons/filled/lists.svg";

import { ReactComponent as ProfileO } from "../assets/icons/outline/profile.svg";
import { ReactComponent as ProfileF } from "../assets/icons/filled/profile.svg";

import { ReactComponent as ExploreO } from "../assets/icons/outline/hash.svg";
import { ReactComponent as SearchO } from "../assets/icons/outline/search.svg";

import { ReactComponent as MoreO } from "../assets/icons/outline/more.svg";

import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../store/nav-slice";
import ExtraNav from "./ExtraNav";

function NavItem({ to, btnText, iconName, badge, dot, end }) {
  let resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: end ? false : true });

  const isNavOpen = useSelector((state) => state.nav.isOpen);
  const dispatch = useDispatch();

  const navHandler = () => {
    dispatch(navActions.toggle());
  };

  return (
    <>
      {to ? (
        <div className="w-full flex justify-center xl:justify-start">
          <Link
            to={to}
            className={`relative hover:bg-black/10 rounded-full flex items-center w-fit p-1 my-1 average:mb-[1px] average:mt-0 ${
              iconName === "lists" || iconName === "bookmarks"
                ? "short:hidden"
                : ""
            }`}
          >
            <div className="p-2 w-[42px] h-[42px] relative">
              <div
                className={
                  badge && badge > 0
                    ? `flex justify-center items-center text-[10px] min-w-[18px] h-[18px] bg-blue right-1 top-1 absolute rounded-full border-white border text-white`
                    : "hidden"
                }
              >
                <span>{badge}</span>
              </div>
              <div
                className={
                  dot
                    ? "w-[7px] h-[7px] right-2 top-1 absolute rounded-full bg-blue"
                    : "hidden"
                }
              ></div>
              {iconName === "explore" && (
                <ExploreO
                  className={`${
                    match ? "stroke-4 stroke-black" : " fill-black "
                  } hidden sm:flex`}
                />
              )}
              {iconName === "explore" && (
                <SearchO
                  className={`${
                    match ? "stroke-4 stroke-black" : " fill-black "
                  } flex sm:hidden`}
                />
              )}

              {iconName === "home" && !match && (
                <HomeO className=" fill-black " />
              )}
              {iconName === "home" && match && (
                <HomeF className=" fill-black " />
              )}

              {iconName === "notifications" && !match && (
                <NotificationsO className=" fill-black " />
              )}
              {iconName === "notifications" && match && (
                <NotificationsF className=" fill-black " />
              )}

              {iconName === "messages" && !match && (
                <MessagesO className=" fill-black " />
              )}
              {iconName === "messages" && match && (
                <MessagesF className=" fill-black " />
              )}

              {iconName === "bookmarks" && !match && (
                <BookmarksO className=" fill-black " />
              )}
              {iconName === "bookmarks" && match && (
                <BookmarksF className=" fill-black " />
              )}

              {iconName === "lists" && !match && (
                <ListsO className=" fill-black " />
              )}
              {iconName === "lists" && match && (
                <ListsF className=" fill-black " />
              )}

              {iconName === "profile" && !match && (
                <ProfileO className=" fill-black " />
              )}
              {iconName === "profile" && match && (
                <ProfileF className=" fill-black " />
              )}
            </div>
            <div
              className={`hidden ml-4 mr-6 text-xl xl:flex ${
                match ? "font-bold" : ""
              }`}
            >
              <span>{btnText}</span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="sm:w-full flex justify-center xl:justify-start">
          {isNavOpen && <ExtraNav />}
          <button
            onClick={navHandler}
            className="hover:bg-black/10 rounded-full flex items-center w-fit p-1 my-1 average:mb-[1px] average:mt-0"
          >
            <div className="p-2 w-[42px] h-[42px] ">
              {iconName === "more" && !match && (
                <MoreO className=" fill-black " />
              )}
            </div>
            <div className={`hidden ml-4 mr-6 text-xl xl:flex `}>
              <span>{btnText}</span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}

export default NavItem;
