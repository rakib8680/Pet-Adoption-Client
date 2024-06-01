"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Container, Typography } from "@mui/material";
import { TPet } from "@/types/pet";
import CircularProgress from "@mui/material/CircularProgress";
import AllPetsCard from "@/components/Ui/HomePage/AllPets/AllPetsCard";

const AllPetsPage = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);

  const allPets = data?.data;
  const meta = data?.meta;

  return (
    <>
      <Container className="py-20">
        <div className="text-center py-10 space-y-3">
          {/* todo */}
          <Typography variant="h3">***Searching Filter here *** </Typography>
          <div className="border w-2/4 mx-auto"></div>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-[20vh]">
            <CircularProgress color="primary" sx={{ color: "#F2994A" }} />
          </div>
        )}

        <div className="md:grid grid-cols-4 gap-5">
          {allPets?.map((pet: TPet) => (
            <AllPetsCard key={pet.id} pet={pet} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default AllPetsPage;
