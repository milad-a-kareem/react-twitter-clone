import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:'nav',
    initialState: {isOpen: false},
    reducers:{
        toggle(state){state.isOpen = !state.isOpen}
    }
});

export const navActions =  navSlice.actions

export default navSlice.reducer