import React from "react";

function MainLeft({ children }) {
  const classes = `
    w-full 
    md:w-[600px] 
    shrink 
    lg:max-w-[600px] 
    lg:w-full 
    h-full  
    relative 
    border-r 
    border-xlight-gray
    `;
  return <div className={classes}>{children}</div>;
}

export default MainLeft;
