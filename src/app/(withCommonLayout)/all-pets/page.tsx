"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Container, Typography } from "@mui/material";
import { TPet } from "@/types/pet";
import AllPetsCard from "@/components/Ui/HomePage/AllPets/AllPetsCard";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import FilterPet from "@/components/Shared/Filtering/FilterPet";
import CardSkeleton from "@/components/Ui/HomePage/AllPets/CardSkeleton";

const AllPetsPage = () => {
  
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
  const { data, isLoading, isFetching } = useGetAllPetsQuery({ ...query });

  const allPets = data?.data;
  const meta = data?.meta;

  return (

    <Container className="pb-20 pt-10">

      <div className="text-center space-y-3">
        <Typography variant="h3" color="accent.main">
          Check Our All Lovely Pets
        </Typography>
        <Typography variant="subtitle1">
          Meet our adorable and loving pets below
        </Typography>
        <div className="border w-2/4 mx-auto"></div>
      </div>


        {/* searching/filtering section  */}
        <FilterPet
          setSpecies={setSpecies}
          setSearchTerm={setSearchTerm}
          setAge={setAge}
          setSize={setSize}
          setGender={setGender}
        />


      {isFetching && (
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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


      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {allPets?.map((pet: TPet) => (
          <AllPetsCard key={pet.id} pet={pet} />
        ))}
      </div>


      {!isLoading && allPets?.length === 0 && (
        <div className="text-center py-10">
          <Typography variant="h5" color="text.secondary">
            No pet found
          </Typography>
        </div>

      )}
    </Container>
  );
};

export default AllPetsPage;
