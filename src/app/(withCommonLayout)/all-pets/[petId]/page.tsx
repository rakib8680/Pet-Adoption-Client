'use client';

import { useGetSinglePetQuery } from "@/redux/api/petApi";
import { getUserInfo } from "@/services/auth.service";
import { Container, Paper, Typography } from "@mui/material";



type TParams = {
    params:{
        petId:string
    }
}


const SinglePetPage = ({params}:TParams) => {

    const userInfo = getUserInfo()

    const petId = params.petId

    const {data, isLoading} = useGetSinglePetQuery(petId)

    // console.log(data);

  return (
    <>
      <Container>
        <Typography variant="h2"  >Pet Profile</Typography>
        <Typography variant="h5" className="text-xl">Detailed information about your pet</Typography>
      </Container>
    </>
  );
};

export default SinglePetPage;
