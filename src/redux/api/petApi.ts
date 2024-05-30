import { baseApi } from "./baseApi";




export const petApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPets: builder.query({
            query:() =>({
                url:'/pets',
                method:'GET',
            })
        })
    })
});


export const {useGetAllPetsQuery} = petApi