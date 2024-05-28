import { jwtDecode } from "jwt-decode"



// decode jwt token 
export const decodedToken = (token:string) =>{
    
    const data = jwtDecode(token)

    return data
}