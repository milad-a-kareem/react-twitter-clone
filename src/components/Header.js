import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Tweet } from "../assets/icons/outline/tweet.svg";
import NavItem from "./NavItem";
import { Link, useLocation } from "react-router-dom";
import Accounts from "./Accounts";

function Header() {
  let location = useLocation();
  console.log(location);
  return (
    <header className="flex grow justify-end h-full">
      <div className="border-r h-full border-xlight-gray px-1 xl:px-3 flex justify-end overflow-auto min-w-[88px] xl:w-[285px]">
        <div className="xl:px-3 h-full fixed top-0  flex flex-col items-center justify-between max-w-[275px] xl:items-start xl:w-[285px]">
          <div className="flex flex-col w-full items-start">
            <div className="w-full flex justify-center xl:justify-start">
              <div className="p-2 w-12 h-12 rounded-full hover:bg-blue/10">
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
            <NavItem to="/bookmarks" iconName="bookmarks" btnText="bookmarks" />
            <NavItem to="/lists" iconName="lists" btnText="lists" />
            <NavItem to="/profile" iconName="profile" btnText="profile" />
            <NavItem to="" iconName="more" btnText="More" />

            <Link
              state={{ isTweetOpen: location }}
              to="/compose/tweet"
              className="w-full flex justify-center xl:justify-start"
            >
              <div className="bg-blue hover:bg-dark-blue w-14 h-14 rounded-full flex justify-center items-center xl:w-11/12 my-3 average:my-1 shadow-sm">
                <span className="hidden xl:flex text-white text-lg font-bold ">
                  Tweet
                </span>
                <div className="w-6 flex xl:hidden">
                  <Tweet className="fill-white" />
                </div>
              </div>
            </Link>
          </div>

          <Accounts />
        </div>
      </div>
    </header>
  );
}

export default Header;
