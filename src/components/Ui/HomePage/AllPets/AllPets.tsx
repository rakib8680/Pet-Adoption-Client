"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import {
  Button,
  Container,
  Typography,
} from "@mui/material";
import AllPetsCard from "./AllPetsCard";
import { TPet } from "@/types/pet";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import FilterPet from "@/components/Shared/Filtering/FilterPet";




const AllPets = () => {
  // states 
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [age, setAge] = useState<string>("");

  // console.log(searchTerm);



  // queries
  const query: Record<string, any> = {};
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (!!species) {
    query["species"] = species;
  }
  if (!!age) {
    query["age"] = age;
  }



  // api calling
  const { data, isLoading } = useGetAllPetsQuery({...query});

  const allPets = data?.data;
  const meta = data?.meta;



  return (
    <>
      <Container className="py-20">
        <div className="text-center py-10 space-y-3">
          <Typography variant="h3" color="accent.main">
            Our Lovely Pets
          </Typography>
          <Typography variant="subtitle1">
            Meet our adorable and loving pets below
          </Typography>
          <div className="border w-2/4 mx-auto"></div>
        </div>




        {/* searching/filtering section  */}
       <FilterPet setSpecies={setSpecies} setSearchTerm={setSearchTerm} setAge={setAge}/>





        {isLoading && (
          <div className="flex justify-center items-center h-[20vh]">
            <CircularProgress color="primary" sx={{ color: "#F2994A" }} />
          </div>
        )}

        <div className="grid grid-cols-4 gap-5">
          {allPets?.slice(0, 8).map((pet: TPet) => (
            <AllPetsCard key={pet.id} pet={pet} />
          ))}
        </div>

        {!isLoading && allPets?.length > 8  && (
          <div className="flex justify-center mt-10">
            <Button
              component={Link}
              href="/all-pets"
              disableElevation
              variant="outlined"
              color="warning"
              sx={{
                bgcolor: "white",
                color: "#F2994A",
                border: "1px solid #F2994A",
              }}
            >
              View All
            </Button>
          </div>
        )}

        {
          !isLoading && allPets?.length === 0 && (
            <div className="text-center py-10">
              <Typography variant="h5" color="text.secondary">
                No pets found
              </Typography>
            </div>
          )
        }


      </Container>
    </>
  );
};

export default AllPets;
