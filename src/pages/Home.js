import { ReactComponent as TopTweetsIcon } from "../assets/icons/outline/topTweets.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/outline/search.svg";
import { useEffect } from "react";
import MainLeft from "../components/MainLeft";
import Tweet from "../components/Tweet";
import TweetBox from "../components/TweetBox";

function Home() {
  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);

  return (
    <>
      <MainLeft>
        <div className="backdrop-blur-md w-full sticky top-0 left-0 h-14 bg-white/90 flex justify-between items-center p-4 ">
          <div className="text-xl font-bold">
            <span>Home</span>
          </div>
          <div className="w-[36px] h-[36px] p-2 hover:bg-black/10 rounded-full">
            <TopTweetsIcon className="fill-black" />
          </div>
        </div>
        <TweetBox />
        <Tweet verified />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet verified />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet verified />
      </MainLeft>

      <div className="hidden lg:flex lg:flex-col w-[290px] min-w-[290px] lg2:w-[350px] xl:min-w-[350px]  h-full shrink-0 lg:mr-[10px]">
        <div className="backdrop-blur-md w-full sticky top-0 left-0 h-[53px] bg-white/90 flex justify-between items-center ">
          <div className="bg-dark-gray/10  h-[45px] w-full rounded-full flex justify-start items-center px-5 gap-4">
            <div className="w-5 h-5 fill-dark-gray">
              <SearchIcon />
            </div>
            <input
              className="bg-transparent outline-none p-3"
              type="text"
              name=""
              id=""
              placeholder="Search Twitter"
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
