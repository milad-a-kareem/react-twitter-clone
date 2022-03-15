import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Tweet } from "../assets/icons/outline/tweet.svg";
import NavItem from "./NavItem";
import { Link, useLocation } from "react-router-dom";
import Accounts from "./Accounts";

function Header() {
  let location = useLocation();
  console.log(location);
  return (
    <header className="w-full sm:w-fit fixed bottom-0 left-0 sm:static flex grow justify-end sm:h-full z-[50] bg-white">
      <div className="w-full sm:w-fit justify-between border-r sm:h-full border-xlight-gray px-1 xl:px-3 flex sm:justify-end overflow-auto min-w-[88px] xl:w-[285px]">
        <div className="xl:px-3 sm:h-full sm:fixed sm:top-0  flex sm:flex-col items-center justify-between w-full sm:w-fit sm:max-w-[275px] xl:items-start xl:w-[285px]">
          <div className="flex flex-row sm:flex-col w-full items-center justify-between sm:items-start ">
            <div className="hidden sm:flex w-full  sm:justify-center xl:justify-start">
              <div className=" p-2 w-12 h-12 rounded-full hover:bg-blue/10">
                <Twitter className=" fill-blue " />
              </div>
            </div>

            <NavItem to="/home" iconName="home" btnText="Home" dot />
            <NavItem to="/explore" iconName="explore" btnText="Explore" />
            <NavItem
              to="/notifications"
              iconName="notifications"
              btnText="Notifications"
              badge={5}
            />
            <NavItem
              to="/messages"
              iconName="messages"
              btnText="Messages"
              badge={7}
            />
            <div className="w-full sm:flex justify-center hidden">
              <NavItem
                to="/bookmarks"
                iconName="bookmarks"
                btnText="bookmarks"
              />
            </div>
            <div className="w-full sm:flex justify-center hidden">
              <NavItem to="/lists" iconName="lists" btnText="lists" />
            </div>
            <div className="w-full sm:flex justify-center hidden">
              <NavItem to="/profile" iconName="profile" btnText="profile" />
            </div>
            <div className="w-full sm:flex justify-center hidden">
              <NavItem to="" iconName="more" btnText="More" />
            </div>

            <Link
              state={{ isTweetOpen: location }}
              to="/compose/tweet"
              className="fixed right-5 bottom-14 sm:static sm:w-full flex justify-center xl:justify-start"
            >
              <div className=" bg-blue hover:bg-dark-blue w-14 h-14 rounded-full flex justify-center items-center xl:w-11/12 my-3 average:my-1 shadow-sm">
                <span className="hidden xl:flex text-white text-lg font-bold ">
                  Tweet
                </span>
                <div className="w-6 flex xl:hidden">
                  <Tweet className="fill-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex">
            <Accounts />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
