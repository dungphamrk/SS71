import { createSlice } from "@reduxjs/toolkit";


const initialState:string = 'white';
export const themeReducer= createSlice({
    name:"randomReducer",
    initialState: initialState,
    reducers:{
       changeTheme: (state)=> state === 'white'? 'black':'white'
    }
})
export const {changeTheme} =themeReducer.actions;
export default themeReducer.reducer;