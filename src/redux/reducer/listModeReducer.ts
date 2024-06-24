import { createSlice } from "@reduxjs/toolkit";


const initialState:string = 'row';
export const modelReducer= createSlice({
    name:"modelReducer",
    initialState: initialState,
    reducers:{
       changeModel: (state)=> state === 'row'? 'column':'row'
    }
})
export const {changeModel} =modelReducer.actions;
export default modelReducer.reducer;