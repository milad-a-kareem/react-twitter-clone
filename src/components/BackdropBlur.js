import React from "react";

function BackdropBlur({ children, col }) {
  const classes = col
    ? " backdrop-blur-md w-full sticky top-0 left-0  bg-white/90 flex flex-col justify-start items-stretch z-10 border-b border-b-xlight-gray"
    : " backdrop-blur-md w-full sticky top-0 left-0 h-14 bg-white/90 flex justify-between items-center p-4 z-10";
  return <div className={classes}>{children}</div>;
}

export default BackdropBlur;
