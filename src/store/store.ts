import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import auth from './slices/auth/slice';
import authApi from './slices/auth/apis/auth';
import jokes from './slices/jokes/slice';
import jokesApi from './slices/jokes/apis/jokes';
import translates from './slices/translates/slice';

const store = configureStore({
  reducer: {
    jokes,
    [jokesApi.reducerPath]: jokesApi.reducer,
    auth,
    [authApi.reducerPath]: authApi.reducer,
    translates,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(jokesApi.middleware)
    .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
