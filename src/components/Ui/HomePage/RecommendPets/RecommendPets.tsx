"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import getRandomPets from "@/utils/getRandomPets";
import { Box, Typography } from "@mui/material";
import CardSkeleton from "../AllPets/CardSkeleton";
import { TPet } from "@/types/pet";
import AllPetsCard from "../AllPets/AllPetsCard";

const RecommendPets = () => {
  const { data,  isFetching } = useGetAllPetsQuery({});

  const allPets = data?.data;

  let randomPets = [];
  if (allPets) {
    randomPets = getRandomPets(allPets, 3);
  }

  return (
    <>
      <div className="text-center space-y-3 lg:space-y-5 lg:w-2/4 mx-auto">
        <Typography  className="!text-3xl lg:!text-5xl" color="accent.main">
          Recommended For You
        </Typography>
        <Typography  className="!text-xs lg:!text-base">
          Here are some pets that we recommend for you. They are all very
          friendly and are looking for a new home. You can check them out and
          see if you are interested in adopting them.
        </Typography>
        <div className="border w-2/4 mx-auto"></div>
      </div>

      <Box
        className="bg-gradient-to-r  from-[#EFEFEF] to-white "
        sx={{
          clipPath: {
            xs: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            lg: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
          },
        }}
      >
        <div className=" max-w-6xl  mx-auto py-24 lg:py-32 mb-10 ">
          {isFetching && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-0 px-7 md:px-0  md:place-items-center">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-0 px-7 md:px-0 md:place-items-center ">
            {randomPets?.map((pet: TPet) => (
              <AllPetsCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default RecommendPets;
