import { baseApi } from "./baseApi";




export const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getMyProfile : builder.query({
            query:()=>({
                url:"/profile",
                method:"GET"
            }),
            providesTags:["user"]
        }),
        changePassword : builder.mutation({
            query:(payload)=>({
                url:"/change-password",
                method:"POST",
                data:payload
            }),
            invalidatesTags:["user"]
        })
    })
})


export const {useGetMyProfileQuery, useChangePasswordMutation} = userApi