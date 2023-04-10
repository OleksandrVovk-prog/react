import { createSlice } from '@reduxjs/toolkit';
import IAuthResponse from './interfaces/IAuthResponse';
import authApi from './apis/auth';

const initialState: IAuthResponse = {
  id: undefined,
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder): void => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }): void => {
        state.id = payload.id;
        state.token = payload.token;
      },
    );
  },
});

export default userSlice.reducer;
