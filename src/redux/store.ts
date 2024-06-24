import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer/countReducer'
import randomReducer from "./reducer/randomReducer";
import themeReducer from "./reducer/themeReducer";
import  modelReducer  from "./reducer/listModeReducer";
import languageReducer from "./reducer/languageReducer";
import sideBarReducer from "./reducer/sideBarReducer";
import  heartModeReducer  from "./reducer/heartModeReducer";
import authSlice from "./reducer/authSlice";
export const store = configureStore({
    reducer:{
        count :reducer,
        random: randomReducer,
        theme: themeReducer,
        model:modelReducer,
        language:languageReducer,
        sideBar:sideBarReducer,
        heartMode:heartModeReducer,
        auth: authSlice
    }
 
})