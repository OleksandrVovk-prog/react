import dummyApi from '../../../apis/dummy';
import AUTHENTICATED_USER from '../../../tags/auth';

import IAuthResponse from '../interfaces/IAuthResponse';
import IAuthRequest from '../interfaces/IAuthRequest';

const dummyAuthApi = dummyApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, Partial<IAuthRequest>>({
      invalidatesTags: [AUTHENTICATED_USER],
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    }),
    fetchUser: builder.query<IAuthResponse, number | undefined>({
      providesTags: [AUTHENTICATED_USER],
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useFetchUserQuery } = dummyAuthApi;

export default dummyAuthApi;
