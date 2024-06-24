"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Button, Container, Typography } from "@mui/material";
import AllPetsCard from "./AllPetsCard";
import { TPet } from "@/types/pet";
import Link from "next/link";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import FilterPet from "@/components/Shared/Filtering/FilterPet";
import CardSkeleton from "./CardSkeleton";

const AllPets = () => {


  // states
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [gender, setGender] = useState<string>("");




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
  if (!!size) {
    query["size"] = size;
  }
  if (!!gender) {
    query["gender"] = gender;
  }

  

  // api calling
  const { data, isLoading , isFetching} = useGetAllPetsQuery({ ...query });

  const allPets = data?.data;
  const meta = data?.meta;


  // console.log(isLoading, isFetching);

  return (
    <>
      <Container className="py-20 pb-36 ">
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
        <Typography variant="subtitle2"  className="!ms-6 !-mb-4 lg:hidden">
          Filter Pets : 
        </Typography>
        <FilterPet
          setSpecies={setSpecies}
          setSearchTerm={setSearchTerm}
          setAge={setAge}
          setSize={setSize}
          setGender={setGender}
        />



        {isFetching && (
          // <div className="flex justify-center items-center h-[20vh]">
          //   <CircularProgress color="primary" sx={{ color: "#F2994A" }} />
          // </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-3 md:px-0 md:place-items-center">
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
        </div>
        )}

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 hidden place-items-center">
          {allPets?.slice(0, 8).map((pet: TPet) => (
            <AllPetsCard key={pet.id} pet={pet} />
          ))}
        </div>
        <div className="grid  gap-5 md:hidden px-3">
          {allPets?.slice(0, 4).map((pet: TPet) => (
            <AllPetsCard key={pet.id} pet={pet} />
          ))}
        </div>



        {!isLoading && allPets?.length > 8 && (
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


        {!isLoading && allPets?.length === 0 && (
          <div className="text-center py-10">
            <Typography variant="h5" color="text.secondary">
              No pet found
            </Typography>
          </div>
        )}


      </Container>

    </>
  );
};

export default AllPets;
