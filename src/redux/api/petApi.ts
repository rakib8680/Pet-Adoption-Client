import { baseApi } from "./baseApi";




export const petApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPets: builder.query({
            query:(args:Record<string,any>) =>({
                url:'/pets',
                method:'GET',
                params : args
            })
        }),
        getSinglePet : builder.query({
            query:(petId:string)=>({
                url:`/pets/${petId}`,
                method:'GET',
            })
        })
    })
});


export const {useGetAllPetsQuery, useGetSinglePetQuery} = petApi