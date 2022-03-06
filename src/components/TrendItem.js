import React, { useRef, useState } from "react";
import { ReactComponent as ElipsisIcon } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as SadIcon } from "../assets/icons/outline/sad.svg";

import ReactDOM from "react-dom";
import Backdrop from "../Modals/Backdrop";

function TrendItem({ tweets, catText, title, dir }) {
  const [showOptions, setShowOptions] = useState(false);
  const opButtonRef = useRef();
  const [location, setLocation] = useState({ top: 0, right: 0 });
  const onOpen = (e) => {
    setLocation({
      top: opButtonRef.current.getBoundingClientRect().top,
      right: opButtonRef.current.getBoundingClientRect().right,
    });
    setShowOptions(true);
  };
  const onClose = () => {
    setShowOptions(false);
  };

  return (
    <div className="px-4 py-3 flex flex-col hover:bg-dark-gray/10 relative">
      <div className="text-sm text-dark-gray">{catText}</div>
      <button
        ref={opButtonRef}
        onClick={onOpen}
        className="w-9 h-9 p-2 fill-dark-gray rounded-full hover:fill-blue hover:bg-blue/10 absolute top-1 right-1"
      >
        <ElipsisIcon />
      </button>
      {showOptions &&
        ReactDOM.createPortal(
          <Backdrop onClick={onClose} />,
          document.getElementById("backdrop")
        )}

      {showOptions &&
        ReactDOM.createPortal(
          <Options
            top={window.scrollY + location.top + 7 + "px"}
            right={window.innerWidth - location.right - 7 + "px"}
          />,
          document.getElementById("modal")
        )}
      <div
        className="font-bold py-1"
        dir={dir && dir === "rtl" ? "rtl" : "ltr"}
      >
        #{title}
      </div>
      {tweets && tweets.length > 1 && (
        <div className="text-sm text-dark-gray">{tweets} Tweets</div>
      )}
    </div>
  );
}

export default TrendItem;

function Options({ top, right }) {
  return (
    <div
      style={{ top, right }}
      className={`flex flex-col rounded-[4px] overflow-hidden absolute shadow-a z-[60]`}
    >
      <button className="flex items-center gap-3  bg-white  p-4 hover:bg-xxlight-gray font-normal">
        <div className="w-5 h-5 fill-dark-gray">
          <SadIcon />
        </div>
        <div>Not interested in this</div>
      </button>
      <button className="flex items-center gap-3  bg-white p-4 hover:bg-xxlight-gray font-normal">
        <div className="w-5 h-5 fill-dark-gray">
          <SadIcon />
        </div>
        <div>This trend is harmful or spammy</div>
      </button>
    </div>
  );
}
