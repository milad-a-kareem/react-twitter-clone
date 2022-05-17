import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Lists from "./pages/Lists";
import Profile from "./pages/Profile";
import Topics from "./pages/Topics";
import Moments from "./pages/Moments";
import Settings from "./pages/Settings";

import Header from "./components/Header";

import TweetModal from "./Modals/TweetModal";
import { createPortal } from "react-dom";
import MessagesWindow from "./components/MessagesWindow";

function App() {
  let location = useLocation();
  return (
    <div className="w-full min-h-screen bg-white  flex justify-center box-border">
      <div className="grow max-w-[1300px] flex justify-center">
        <div className=" w-full min-h-full flex justify-center sm:w-auto">
          <Header />

          <main className="min-w-0 grow items-stretch sm:items-start max-w-full w-full  md:grow-[2] min-h-full  flex  sm:shrink lg:grow-0 sm:max-w-[auto]  lg:w-[920px] lg2:w-[990px] md:justify-between ">
            <Routes location={location.state?.isTweetOpen || location}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />}>
                <Route path="mentions" element={<Notifications />} />
              </Route>
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/:username" element={<Profile />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/moments" element={<Moments />} />
              <Route path="/setttings" element={<Settings />} />
            </Routes>
            {location.state?.isTweetOpen && (
              <Routes>
                <Route path="/compose/tweet" element={<TweetModal />} />
              </Routes>
            )}
          </main>
        </div>
      </div>
      {location.pathname !== "/messages" &&
        createPortal(<MessagesWindow />, document.getElementById("messages"))}
    </div>
  );
}

export default App;
