import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import jokes from './slices/jokes/slice';
import jokesApi from './slices/jokes/apis/jokes';
import translates from './slices/translates/slice';

const store = configureStore({
  reducer: {
    jokes,
    translates,
    [jokesApi.reducerPath]: jokesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(jokesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
