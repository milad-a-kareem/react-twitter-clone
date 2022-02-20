import { ReactComponent as TopTweetsIcon } from "../assets/icons/outline/topTweets.svg";

import MainLeft from "../components/MainLeft";
import TweetBox from "../components/TweetBox";

function Home() {
  return (
    <>
      <MainLeft>
        <div className="backdrop-blur-md w-full sticky top-0 left-0 h-14 bg-white/90 flex justify-between items-center p-4">
          <div className="text-xl font-bold">
            <span>Home</span>
          </div>
          <div className="w-[36px] h-[36px] p-2 hover:bg-black/10 rounded-full">
            <TopTweetsIcon className="fill-black" />
          </div>
        </div>
        <TweetBox />
      </MainLeft>
      <div className="hidden lg:flex min-w-[350px] h-full bg-red-400 shrink-0"></div>
    </>
  );
}

export default Home;
