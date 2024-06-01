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
  }),
});

export const { useSubmitAdoptionRequestMutation } = adoptionApi;
