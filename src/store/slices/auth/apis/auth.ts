import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import AUTHENTICATED_USER from '../tags';

import IAuthResponse from '../interfaces/IAuthResponse';
import IAuthRequest from '../interfaces/IAuthRequest';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  tagTypes: [AUTHENTICATED_USER],
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

export const { useLoginMutation, useFetchUserQuery } = authApi;
export default authApi;
