import React from "react";
import BackdropBlur from "../components/BackdropBlur";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";
import PageTitle from "../components/PageTitle";

function Bookmarks() {
  return (
    <>
      <MainLeft>
        <BackdropBlur>
          <PageTitle>Bookmarks</PageTitle>
        </BackdropBlur>
      </MainLeft>
      <MainRight></MainRight>
    </>
  );
}

export default Bookmarks;
