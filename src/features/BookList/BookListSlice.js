import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

const BookListSlice = createSlice({
  name: 'booklist',
  initialState,
  reducers: {
    toggleMode(state, action) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export default BookListSlice.reducer;
export const { toggleMode } = BookListSlice.actions;
