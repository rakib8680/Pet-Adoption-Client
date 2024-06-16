import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/change-password",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["user"],
    }),
    updateMyProfile: builder.mutation({
      query: (payload) => ({
        url: "/profile/update",
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: (id:string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `/user/${payload?.id}`,
        method: "PATCH",
        data: payload?.data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useChangePasswordMutation,
  useUpdateMyProfileMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useGetSingleUserQuery,
} = userApi;
