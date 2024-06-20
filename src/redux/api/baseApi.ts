import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["user", "pet", "adoption"],
  baseQuery: axiosBaseQuery({
    baseUrl: `https://pet-adoption-server-new.vercel.app/api`,
  }),
  endpoints: (builder) => ({}),
});
