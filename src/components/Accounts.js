import { useState } from "react";
import { ReactComponent as EllipsIcons } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as Triangle } from "../assets/icons/triangle.svg";
import { ReactComponent as Checkmark } from "../assets/icons/checkmark.svg";

function Accounts() {
  const [isAccountsOpen, setAccountsIsOpen] = useState(false);

  const clickHandler = () => {
    setAccountsIsOpen(true);
  };
  return (
    <>
      {isAccountsOpen && (
        <div
          onClick={() => {
            setAccountsIsOpen(false);
          }}
          className="bg-black/0 fixed h-screen w-screen z-20 left-0 top-0"
        ></div>
      )}
      <div
        onClick={clickHandler}
        className="max-w-full cursor-pointer relative overflow-visible"
      >
        {isAccountsOpen && (
          <div className="bg-white rounded-xl h-fit w-[300px] fixed shadow-a bottom-24 z-30 cursor-default ml-1 xl:-ml-6 pb-3">
            <Triangle className="w-[24px] h-4 rotate-180 fill-white absolute bottom-[-11px] left-5 xl:left-1/2 xl:-translate-x-1/2 drop-shadow-a -z-10" />
            <div className="p-4 flex items-center border-b border-xlight-gray/70">
              <div className="rounded-full w-12 h-12 bg-blue overflow-clip">
                <img
                  width="100%"
                  height="100%"
                  src="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-1/s320x320/241285199_1538427673180442_9053026322561242168_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0rX1p1QoSrAAX872shk&_nc_ht=scontent.febl5-1.fna&oh=00_AT-aNaGB59KOChXUlmfXI___YI1fpxV3G-HCXSoLfxLu7Q&oe=61FF7DB3"
                  alt=""
                  srcSet=""
                />
              </div>

              <div className="flex flex-col justify-center mx-4 flex-grow">
                <div className="text-base font-bold">
                  <span>Milad A. Kareem</span>
                </div>
                <div className="text-sm text-dark-gray">
                  <span>@milad_a_kareem</span>
                </div>
              </div>

              <div className="w-5 h-5">
                <Checkmark className="fill-blue " />
              </div>

              <div></div>
            </div>

            <div className="w-full p-4 hover:bg-xxlight-gray cursor-pointer">
              <div>
                <span>Add an existing account</span>
              </div>
            </div>
            <div className="w-full p-4 hover:bg-xxlight-gray cursor-pointer">
              <div>
                <span>Log out @milad_a_kareem</span>
              </div>
            </div>
          </div>
        )}
        <div className="rounded-full my-4 hover:bg-black/10">
          <div className="p-4 flex items-center">
            <div className="rounded-full w-10 h-10 bg-blue overflow-clip">
              <img width="100%" height="100%" src="" alt="" srcSet="" />
            </div>

            <div className="hidden xl:flex flex-col justify-center mx-4 ">
              <div className="text-base font-bold">
                <span>Milad A. Kareem</span>
              </div>
              <div className="text-sm text-dark-gray">
                <span>@milad_a_kareem</span>
              </div>
            </div>

            <div className="w-4 h-4 hidden xl:flex">
              <EllipsIcons />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
