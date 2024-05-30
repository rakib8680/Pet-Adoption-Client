"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Container, Typography } from "@mui/material";
import AllPetsCard from "./AllPetsCard";
import { TPet } from "@/types/pet";




const AllPets = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);

  
  const allPets = data?.data
  const meta = data?.meta

  return (
    <Container className="py-20">
      <div className="text-center py-10 space-y-3">
        <Typography variant="h3" color='accent.main' >
          Our Lovely Pets
        </Typography>
        <Typography variant="subtitle1" >
          Meet our adorable and loving pets below
        </Typography>
        <div className="border w-2/4 mx-auto"></div>
      </div>

      <div className="grid grid-cols-4 gap-5">

        {
            allPets?.map((pet:TPet)=>(
                <AllPetsCard key={pet.id} pet={pet} />
            ))
        }
        
      </div>
    </Container>
  );
};

export default AllPets;
