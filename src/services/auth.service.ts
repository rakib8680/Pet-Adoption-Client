import { authKey } from "@/constants/authKey";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";




// store user access token  in local storage
export const storeAccessToken = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};



// remove access token from local storage
export const removeAccessToken = () => {
  return removeFromLocalStorage(authKey);
};



// get userinfo from access token
export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authKey);

  if (!accessToken) return null;
  const decodedData: any = decodedToken(accessToken);

  return decodedData;
};




// check if the user is logged in 
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};