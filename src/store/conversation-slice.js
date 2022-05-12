import { createSlice } from "@reduxjs/toolkit";
import users from "../data/users";
import conversations from "../data/conversations";

const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState: { username: null, user: null, conversation: null },
  reducers: {
    change(state, { payload }) {
      state.username = payload;
      state.user = users.filter((user) => user.username === payload)[0];
      state.conversation = conversations.filter(
        (conv) => conv.user.username === payload
      )[0];
    },
  },
});

export const convActions = conversationSlice.actions;
export default conversationSlice.reducer;
