import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["user", "pet", "adoption"],
  baseQuery: axiosBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),
  endpoints: (builder) => ({}),
});
