import { createSlice } from "@reduxjs/toolkit";

const messageWindowSlice = createSlice({
  name: "messageWindow",
  initialState: { isOpen: false },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const actions = messageWindowSlice.actions;
export default messageWindowSlice.reducer;
