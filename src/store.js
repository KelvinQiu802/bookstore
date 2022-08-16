import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './features/Search/SearchSlice';

const store = configureStore({
  reducer: {
    search: SearchSlice,
  },
});

export default store;
