import { createSlice } from "@reduxjs/toolkit";


const initialState:number[] = [];
export const randomReducer= createSlice({
    name:"randomReducer",
    initialState: initialState,
    reducers:{
        random:(state)=>[...state, Math.floor(Math.random() * 10)],
    }
})
export const {random} =randomReducer.actions;
export default randomReducer.reducer;