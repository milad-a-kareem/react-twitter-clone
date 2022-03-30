import { useState } from "react";
import { ReactComponent as EllipsIcons } from "../assets/icons/outline/ellipsis.svg";
import { ReactComponent as Triangle } from "../assets/icons/triangle.svg";
import { ReactComponent as Checkmark } from "../assets/icons/checkmark.svg";
import { useSelector } from "react-redux";

function Accounts() {
  const [isAccountsOpen, setAccountsIsOpen] = useState(false);
  const user = useSelector((state) => state.user);

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
                  src={user.profileImage}
                  alt=""
                  srcSet=""
                />
              </div>

              <div className="flex flex-col justify-center mx-4 flex-grow">
                <div className="text-base font-bold">
                  <span>{user.display_name}</span>
                </div>
                <div className="text-sm text-dark-gray">
                  <span>@{user.username}</span>
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
                <span>Log out @{user.username}</span>
              </div>
            </div>
          </div>
        )}
        <div className="rounded-full my-4 hover:bg-black/10">
          <div className="p-4 flex items-center">
            <div className="rounded-full w-10 h-10 bg-blue overflow-clip">
              <img
                width="100%"
                height="100%"
                src={user.profileImage}
                alt=""
                srcSet=""
              />
            </div>

            <div className="hidden xl:flex flex-col justify-center mx-4 ">
              <div className="text-base font-bold">
                <span>{user.display_name}</span>
              </div>
              <div className="text-sm text-dark-gray">
                <span>@{user.username}</span>
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
