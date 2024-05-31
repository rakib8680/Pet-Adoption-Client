'use client';

import { useGetSinglePetQuery } from "@/redux/api/petApi";



type TParams = {
    params:{
        petId:string
    }
}


const SinglePetPage = ({params}:TParams) => {

    const petId = params.petId

    const {data, isLoading} = useGetSinglePetQuery(petId)

    console.log(data);

  return (
    <div>
      <h1>This is SinglePetPage component</h1>
    </div>
  );
};

export default SinglePetPage;
