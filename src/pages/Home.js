import { ReactComponent as TopTweetsIcon } from "../assets/icons/outline/topTweets.svg";

function Home() {
  return (
    <>
      <div className="grow w-[200px] h-full overflow-y-auto  relative">
        <div className="backdrop-blur-md w-full sticky top-0 left-0 h-14 bg-white/90 flex justify-between items-center p-4">
          <div className="text-xl font-bold">
            <span>Home</span>
          </div>
          <div className="w-[36px] h-[36px] p-2 hover:bg-black/10 rounded-full">
            <TopTweetsIcon className="fill-black" />
          </div>
        </div>
        <div className="w-full p-4 flex">
          <div className="w-[50px] h-[50px] bg-blue rounded-full mr-3 mt-1"></div>
          <div className="grow  flex flex-col ">
            <div className="w-full">
              <textarea
                cols="30"
                rows="10"
                placeholder="What's happening?"
                className="bg-transparent focus:outline-none w-full"
              ></textarea>
            </div>
            <div className="w-full"></div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex min-w-[350px] h-full bg-red-400 shrink-0"></div>
    </>
  );
}

export default Home;
