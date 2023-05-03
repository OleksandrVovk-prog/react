import { createSlice } from '@reduxjs/toolkit';
// import dummyApi from '../../apis/dummy';
// import authApi from './apis/auth';
import dummyAuthApi from './apis/dummyAuth';

import IAuthResponse from './interfaces/IAuthResponse';

const initialState: IAuthResponse = {
  id: undefined,
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder): void => {
    builder.addMatcher(
      dummyAuthApi.endpoints.login.matchFulfilled,
      (state, { payload }): void => {
        state.id = payload.id;
        state.token = payload.token;
      },
    );
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
