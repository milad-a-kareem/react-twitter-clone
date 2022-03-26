import React from "react";

function PageTitle({ children }) {
  return (
    <div className="text-xl font-bold">
      <span>{children}</span>
    </div>
  );
}

export default PageTitle;
