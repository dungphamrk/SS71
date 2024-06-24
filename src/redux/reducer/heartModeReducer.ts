import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Nguyễn Văn A', favorite: false },
    { id: 2, name: 'Nguyễn Văn B', favorite: false },
    { id: 3, name: 'Nguyễn Văn C', favorite: false },
    { id: 4, name: 'Nguyễn Văn D', favorite: false },
  ]
};

const heartModeSlice = createSlice({
  name: 'heartMode',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const user = state.users.find(user => user.id === action.payload);
      if (user) {
        user.favorite = !user.favorite;
      }
    }
  }
});

export const { toggleFavorite } = heartModeSlice.actions;
export default heartModeSlice.reducer;
