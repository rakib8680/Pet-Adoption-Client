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
      query: (args: Record<string, any>) => ({
        url: "/my-adoption-requests",
        method: "GET",
        params: args,
      }),
      providesTags: ["adoption"],
    }),
    deleteMyAdoptionRequest: builder.mutation({
      query: (id: string) => ({
        url: `/my-adoption-requests/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adoption"],
    }),
    getAllAdoptionRequests: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/adoption-requests",
        method: "GET",
        params: args,
      }),
      providesTags: ["adoption"],
    }),
    updateAdoptionRequest: builder.mutation({
      query: (payload) => ({
        url: `/adoption-requests/${payload?.id}`,
        method: "PUT",
        data: payload?.data,
      }),
      invalidatesTags:['adoption']
    }),
  }),
});

export const {
  useSubmitAdoptionRequestMutation,
  useGetMyAdoptionRequestsQuery,
  useDeleteMyAdoptionRequestMutation,
  useGetAllAdoptionRequestsQuery,
  useUpdateAdoptionRequestMutation,
} = adoptionApi;
