import { authKey } from "@/constants/authKey"
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"



// store user access token  in local storage
export const storeAccessToken = (accessToken:string) =>{
    return setToLocalStorage(authKey, accessToken)
};


// remove access token from local storage
export const removeAccessToken = ()=>{
    return removeFromLocalStorage(authKey)
};



// get userinfo from access token 
 export const getUserInfo = () =>{
    const accessToken = getFromLocalStorage(authKey)
    console.log(accessToken);
 }