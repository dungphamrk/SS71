import { createSlice } from "@reduxjs/toolkit";

const initialState:number = 0;
export const countReducer=createSlice({
    name:"countReducer",
    initialState: initialState,
    reducers:{
        increase:(state)=>state+1,
        decrease:(state)=>state-1,
        reset: ()=>0

    }

})
export const {increase,decrease,reset}=countReducer.actions;
export default countReducer.reducer;