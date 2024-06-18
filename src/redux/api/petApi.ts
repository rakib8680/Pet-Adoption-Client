import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/pets",
        method: "GET",
        params: args,
      }),
      providesTags: ["pet"],
    }),
    getSinglePet: builder.query({
      query: (petId: string) => ({
        url: `/pets/${petId}`,
        method: "GET",
      }),
      providesTags: ["pet"],
    }),
    updatePet: builder.mutation({
      query: (payload) => ({
        url: `/pets/${payload?.id}`,
        method: "PUT",
        data: payload?.data,
      }),
      invalidatesTags: ["pet"],
    }),
    deletePet: builder.mutation({
      query: (id: string) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pet"],
    }),
    addPet: builder.mutation({
      query: (data) => ({
        url: "/pets",
        method: "POST",
        data,
      }),
      invalidatesTags: ["pet"],
    }),
  }),
});

export const {
  useGetAllPetsQuery,
  useGetSinglePetQuery,
  useUpdatePetMutation,
  useDeletePetMutation,
  useAddPetMutation,
} = petApi;
