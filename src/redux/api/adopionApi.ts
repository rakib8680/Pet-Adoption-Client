import { baseApi } from "./baseApi";

export const adoptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitAdoptionRequest: builder.mutation({
      query: (payload) => ({
        url: "/adoption-request",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["adoption"],
    }),
    getMyAdoptionRequests: builder.query({
      query:(args:Record<string, any>)=>({
        url:'/my-adoption-requests',
        method:'GET',
        params : args
      }),
      providesTags: ["adoption"],
    })
  }),
});

export const { useSubmitAdoptionRequestMutation, useGetMyAdoptionRequestsQuery } = adoptionApi;
