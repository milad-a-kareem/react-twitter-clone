import React from "react";

function BackdropBlur({ children }) {
  return (
    <div className=" backdrop-blur-md w-full sticky top-0 left-0 h-14 bg-white/90 flex justify-between items-center p-4 z-10">
      {children}
    </div>
  );
}

export default BackdropBlur;
