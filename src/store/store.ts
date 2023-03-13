import { configureStore } from '@reduxjs/toolkit';
import jokes from './slices/jokes/slice';
import translates from './slices/translates/slice';

const store = configureStore({
  reducer: {
    jokes,
    translates,
  },
});

export default store;
