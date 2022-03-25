import React from "react";

function Backdrop({ onClick, black }) {
  return (
    <div
      onClick={onClick}
      className={
        black
          ? "w-screen h-screen fixed top-0 left-0 bg-black/40 z-50"
          : "w-screen h-screen fixed top-0 left-0 bg-black/0 z-50"
      }
    ></div>
  );
}

export default Backdrop;
