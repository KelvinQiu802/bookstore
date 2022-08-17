import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './features/Search/SearchSlice';
import BookListSlice from './features/BookList/BookListSlice';

const store = configureStore({
  reducer: {
    search: SearchSlice,
    booklist: BookListSlice,
  },
});

export default store;
