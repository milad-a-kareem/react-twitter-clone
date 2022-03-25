import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import TweetBox from "../components/TweetBox";
import Backdrop from "./Backdrop";

import { ReactComponent as CloseIcon } from "../assets/icons/outline/close.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/icons/outline/left-arrow.svg";

function TweetModal() {
  const navigate = useNavigate();

  const onCloseHandler = () => {
    navigate(-1);
  };
  return (
    <>
      {createPortal(
        <Backdrop onClick={onCloseHandler} black />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <CustomModal onClick={onCloseHandler} />,
        document.getElementById("modal")
      )}
    </>
  );
}

export default TweetModal;

function CustomModal({ onClick }) {
  return (
    <div className="bg-white w-full h-full sm:h-auto sm:min-w-[600px] sm:w-[600px] sm:max-h-[90vh] sm:max-w-[80vw] sm:rounded-xl fixed top-0 sm:top-[5%] left-1/2 -translate-x-1/2 flex flex-col z-50 shrink overflow-hidden overflow-y-auto">
      <div className="flex h-[53px] px-3 justify-start items-center">
        <button
          onClick={onClick}
          className="w-9 h-9 p-2 fill-black rounded-full  hover:bg-black/10 transition-colors"
        >
          <LeftArrowIcon className="sm:hidden" />
          <CloseIcon className="hidden sm:flex" />
        </button>
      </div>
      <TweetBox />
      <div className="h-1 grow w-full sm:hidden bg-white"></div>
    </div>
  );
}
