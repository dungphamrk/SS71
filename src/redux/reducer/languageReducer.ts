
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setEnglish: state => {
      state.language = 'en';
    },
    setVietnamese: state => {
      state.language = 'vi';
    }
  }
});

export const { setEnglish, setVietnamese } = languageSlice.actions;
export default languageSlice.reducer;
