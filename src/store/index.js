import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { nav: navSlice, user: userSlice },
});

export default store;
