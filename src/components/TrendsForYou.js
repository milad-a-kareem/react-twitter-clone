import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Trends from "../components/Trends";
import { ReactComponent as SettingsIcon } from "../assets/icons/outline/settings.svg";

function TrendsForYou({ main }) {
  const DUMMY_TRENDS = [
    {
      id: "001",
      catText: "Trending in Iraq",
      tweets: "7,589",
      title: "الحرب_الروسيه_الاكرانيه",
      dir: "rtl",
    },
    {
      id: "002",
      catText: "Politics · Trending",
      tweets: "75.9K",
      title: "UkraineRussianWar",
    },
    {
      id: "003",
      catText: "Sports · Trending",
      tweets: "5M",
      title: "Liverpool",
    },
    {
      id: "004",
      catText: "Trending in Iraq",
      tweets: "8,949",
      title: "Islamophobia",
    },
    {
      id: "005",
      catText: "Politics · Trending",
      tweets: "1,111",
      title: "الاكرانيه",
      dir: "rtl",
    },
  ];

  const EXTRA_TRENDS = [
    {
      id: "0011",
      catText: "Trending in Iraq",
      tweets: "7,589",
      title: "الحرب",
      dir: "rtl",
    },
    {
      id: "0012",
      catText: "Politics · Trending",
      tweets: "22.9K",
      title: "WorldWar3",
    },
    {
      id: "0013",
      catText: "Sports · Trending",
      tweets: "7M",
      title: "Chelse_Liverpool",
    },
    {
      id: "0014",
      catText: "Trending in Iraq",
      tweets: "2,121",
      title: "Islamophobia",
    },
    {
      id: "0015",
      catText: "Politics · Trending",
      tweets: "7589",
      title: "الروسیه",
      dir: "rtl",
    },
  ];

  const [trends, setTrends] = useState(DUMMY_TRENDS);
  let navigate = useNavigate();

  const onShowMore = () => {
    if (trends.length === 10) {
      navigate("/i/trends");
    } else if (trends.length < 9) {
      setTrends((prev) => [...prev, ...EXTRA_TRENDS]);
    }
  };
  const classes = main
    ? "w-full flex flex-col overflow-hidden"
    : `bg-dark-gray/5 w-full rounded-2xl flex flex-col overflow-hidden`;

  return (
    <div className={classes}>
      <div
        className={
          "text-xl font-bold w-full px-4 py-3 flex justify-between items-center"
        }
      >
        <h2>Trends For You</h2>
        {!main && (
          <button className="w-9 h-9 p-2 hover:bg-black/10 rounded-full">
            <SettingsIcon />
          </button>
        )}
      </div>

      <Trends trends={trends} />
      <button
        onClick={onShowMore}
        className="text-blue p-4 hover:bg-dark-gray/10 flex justify-start items-center"
      >
        Show more
      </button>
    </div>
  );
}

export default TrendsForYou;
