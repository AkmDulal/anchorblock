import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const usersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page, perPage }) => `users?page=${page}&per_page=${perPage}`,
      providesTags: ['Users'],
    }),
  }),
});
export const { useGetUsersQuery } = usersApi;