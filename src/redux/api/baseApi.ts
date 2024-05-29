import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";






export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes:[],
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.PET_ADOPTION_BACKEND_URL}`}),
    endpoints:(builder)=>({})
})