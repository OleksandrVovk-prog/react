import type { RootState } from '../../types/TStore';

import IAuthResponse from './interfaces/IAuthResponse';

export const selectUserId = (state: RootState): IAuthResponse['id'] => state.auth.id;

export const selectUserToken = (state: RootState): IAuthResponse['token'] => state.auth.token;
