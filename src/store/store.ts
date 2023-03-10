import { configureStore } from '@reduxjs/toolkit';
import jokes from './slices/jokes/slice';

const store = configureStore({
  reducer: {
    jokes,
  },
});

export default store;
