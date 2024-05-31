import { baseApi } from "./baseApi";




export const petApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPets: builder.query({
            query:() =>({
                url:'/pets',
                method:'GET',
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