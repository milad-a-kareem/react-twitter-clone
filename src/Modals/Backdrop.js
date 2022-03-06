import React from "react";

function Backdrop({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-screen h-screen fixed top-0 left-0 bg-black/0 z-50"
    ></div>
  );
}

export default Backdrop;
