"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Button, Container, Typography } from "@mui/material";
import AllPetsCard from "./AllPetsCard";
import { TPet } from "@/types/pet";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";

const AllPets = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);

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

        {!isLoading && (
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
      </Container>
    </>
  );
};

export default AllPets;
