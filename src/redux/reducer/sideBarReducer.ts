import { createSlice } from "@reduxjs/toolkit";

const initialState:number = 0;
export const sideBarReducer= createSlice({
    name:"sideBarReducer",
    initialState: initialState,
    reducers:{
      changeMode: (state)=>state===0?1:0
    }
})
export const {changeMode} =sideBarReducer.actions;
export default sideBarReducer.reducer;