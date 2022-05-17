import React from "react";

function MainLeft({ children }) {
  const classes = `
    min-w-0
    w-full
    grow
    sm:w-[550px]
    md:w-[600px]
    lg:grow-0
    max-w-[600px]
    sm:border-r
    border-xlight-gray
    flex
    flex-col
    justify-start
    `;
  return <div className={classes}>{children}</div>;
}

export default MainLeft;
