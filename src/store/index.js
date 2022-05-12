import { configureStore } from "@reduxjs/toolkit";
import conversationSlice from "./conversation-slice";
import messageWindowSlice from "./message-window-slice";
import navSlice from "./nav-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    user: userSlice,
    messagesWindow: messageWindowSlice,
    conversation: conversationSlice,
  },
});

export default store;
