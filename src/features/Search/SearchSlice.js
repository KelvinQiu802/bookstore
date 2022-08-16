import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk('search/search', async (url) => {
  const result = await axios.get(url);
  return result.data;
});

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.books = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default SearchSlice.reducer;
