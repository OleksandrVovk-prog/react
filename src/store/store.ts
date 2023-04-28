import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './slices/auth/slice';
import authApi from './slices/auth/apis/auth';
import jokes from './slices/jokes/slice';
import jokesApi from './slices/jokes/apis/jokes';
import translates from './slices/translates/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    jokes,
    [jokesApi.reducerPath]: jokesApi.reducer,
    auth,
    [authApi.reducerPath]: authApi.reducer,
    translates,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
    .concat([
      jokesApi.middleware,
      authApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
