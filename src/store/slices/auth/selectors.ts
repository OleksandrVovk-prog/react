import { createSelector } from '@reduxjs/toolkit';

import IAuthResponse from './interfaces/IAuthResponse';
import type { RootState } from '../../types/TStore';

const selectAuth = (state: RootState): IAuthResponse => state.auth;

export const selectUserId = createSelector(selectAuth, (auth) => auth.id);
export const selectUserToken = createSelector(selectAuth, (auth) => auth.token);

export const selectCurrentUser = createSelector(
  (data: IAuthResponse | undefined) => data,
  (data: IAuthResponse | undefined, userId: IAuthResponse['id'] | undefined) => userId,
  (data, userId) => (userId ? data : undefined),
);
