import React from "react";

function MainLeft({ children }) {
  const classes = `
    w-full 
    max-w-[600px]  
    border-r 
    border-xlight-gray
    flex
    flex-col
    justify-start
    `;
  return <div className={classes}>{children}</div>;
}

export default MainLeft;
