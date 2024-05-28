import { authKey } from "@/constants/authKey"
import { setToLocalStorage } from "@/utils/local-storage"



// store user access token  in local storage
export const storeAccessToken = (accessToken:string) =>{
    return setToLocalStorage(authKey, accessToken)
};