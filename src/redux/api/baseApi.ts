import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes:[],
    baseQuery: axiosBaseQuery({baseUrl: `${process.env.PET_ADOPTION_BACKEND_URL}`}),
    endpoints:(builder)=>({})
})