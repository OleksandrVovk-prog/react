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
import jokes from './slices/jokes/slice';
import translates from './slices/translates/slice';
import dummyApi from './apis/dummy';
import jokesApi from './apis/jokes';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [jokesApi.reducerPath]: jokesApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
    jokes,
    auth,
    translates,
  }),
);

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: Object.keys(preloadedState).length ? preloadedState : undefined,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat([
        jokesApi.middleware,
        dummyApi.middleware,
      ]),
  });
}

export const store = makeStore();

setupListeners(store.dispatch);

export const persistor = persistStore(store);
