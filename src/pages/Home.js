import { ReactComponent as TopTweetsIcon } from "../assets/icons/outline/topTweets.svg";
import { useEffect, useState, useCallback } from "react";
import MainLeft from "../components/MainLeft";
import Tweet from "../components/Tweet";
import TweetBox from "../components/TweetBox";
import MainRight from "../components/MainRight";

import TrendsForYou from "../components/TrendsForYou";
import WhoToFollow from "../components/WhoToFollow";
import tweets from "../data/tweets";
import SearchBar from "../components/SearchBar";
import FooterLinks from "../components/FooterLinks";
import BackdropBlur from "../components/BackdropBlur";
import PageTitle from "../components/PageTitle";
import CircleIconButton from "../components/CircleIconButton";
import MobileMenuIcon from "../components/MobileMenuIcon";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        isScrolled && setIsScrolled(false);
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        !isScrolled && setIsScrolled(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    // setY(window.scrollY);
    // window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <MainLeft>
        <BackdropBlur>
          <div className="flex items-center justify-start gap-[26px] ">
            <MobileMenuIcon />
            <PageTitle>Home</PageTitle>
          </div>
          <CircleIconButton
            color="black"
            hoverColor="black"
            icon={<TopTweetsIcon />}
          />
        </BackdropBlur>
        <div className="hidden sm:flex">
          <TweetBox />
        </div>
        {tweets.map((tweet) => {
          return (
            <Tweet
              {...tweet}
              key={Math.round(Math.random() * 10000000000000)}
            />
          );
        })}
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

export default Home;
