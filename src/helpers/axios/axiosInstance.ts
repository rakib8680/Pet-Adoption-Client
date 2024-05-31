import { authKey } from "@/constants/authKey";
import { TGenericErrorResponse, TResponseSuccess } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json"; // this makes sure that all requests made by this instance have the content-type set to application/json as default
instance.defaults.headers["Accept"] = "application/json"; // this makes sure that all requests made by this instance have the accept header set to application/json
instance.defaults.timeout = 60000; // this means that if the request takes more than 60 seconds, it will be aborted



// Customize the request configuration
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);



// Customize the response configuration
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return { error: error.response?.data || "Something went wrong!!!" };
  }
);



export { instance };
