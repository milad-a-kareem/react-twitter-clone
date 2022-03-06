import React from "react";

function MainRight({ children }) {
  const classes = `
  hidden 
  lg:flex 
  lg:flex-col 
  w-[290px] 
  min-w-[290px] 
  lg2:w-[350px] 
  xl:min-w-[350px]  
  h-full 
  shrink-0 
  lg:mr-[10px]
    `;
  return <div className={classes}>{children}</div>;
}

export default MainRight;
