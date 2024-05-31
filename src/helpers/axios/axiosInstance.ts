import { authKey } from "@/constants/authKey";
import { TGenericErrorResponse, TResponseSuccess } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json"; // this makes sure that all requests made by this instance have the content-type set to application/json as default
instance.defaults.headers["Accept"] = "application/json"; // this makes sure that all requests made by this instance have the accept header set to application/json
instance.defaults.timeout = 60000; // this means that if the request takes more than 60 seconds, it will be aborted

// Customize the request configuration
axios.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    console.log(accessToken);
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
axios.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: TResponseSuccess = {
      success: response?.data?.success,
      statusCode: response?.data?.statusCode,
      message: response?.data?.message,
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject: TGenericErrorResponse = {
      success: error?.response?.data?.success || false,
      message: error?.response?.data?.message || "Something went wrong!!!",
      errorDetails: error?.response?.data?.errorDetails || [],
    };
    // return Promise.reject(error);
    return responseObject;
  }
);

export { instance };
