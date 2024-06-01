import { baseApi } from "./baseApi";




export const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getMyProfile : builder.query({
            query:()=>({
                url:"/profile",
                method:"GET"
            }),
            providesTags:["user"]
        })
    })
})


export const {useGetMyProfileQuery} = userApi