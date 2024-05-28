
'use server'

import { TUserRegistrationInputs } from "@/app/register/page";


export const registerUser = async (userData:TUserRegistrationInputs) =>{
    const res = await fetch(`${process.env.PET_ADOPTION_BACKEND_URL}/register`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData),
        cache:'no-store'
    });

    const data = res.json()

    return data
}