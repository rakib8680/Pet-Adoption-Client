"use client";

import { useGetSinglePetQuery } from "@/redux/api/petApi";
import { getUserInfo } from "@/services/auth.service";
import { TPet } from "@/types/pet";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PetsIcon from "@mui/icons-material/Pets";
import Link from "next/link";

type TParams = {
  params: {
    petId: string;
  };
};

const SinglePetPage = ({ params }: TParams) => {
  const userInfo = getUserInfo();

  const petId = params.petId;

  const { data, isLoading } = useGetSinglePetQuery(petId);

  //   console.log(data);

  const pet: TPet = data?.data;

  return (
    <Container className="py-10 pb-40">
      <div className="space-y-10">
        <div>
          <Typography variant="h2">Pet Profile</Typography>
          <Typography variant="h5">
            Detailed information about your pet
          </Typography>
        </div>
        <Divider>--- o ---</Divider>

        {isLoading ? (
          <div className="flex justify-center items-center h-[20vh]">
            <CircularProgress color="primary" sx={{ color: "#F2994A" }} />
          </div>
        ) : (
          <div className="md:flex  justify-center gap-24 ">
            {/* pet details */}
            <div className="grid grid-cols-3 gap-5">
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Name:{" "}
                <Box component="span" color="accent.main">
                  {pet?.name}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Age:{" "}
                <Box component="span" color="accent.main">
                  {pet?.age}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Breed:{" "}
                <Box component="span" color="accent.main" fontSize={14}>
                  {pet?.breed}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-2"
              >
                Temperament:{" "}
                <Box component="span" color="accent.main">
                  {pet?.temperament}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Gender:{" "}
                <Box component="span" color="accent.main">
                  {pet?.gender}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Species:{" "}
                <Box component="span" color="accent.main">
                  {pet?.species}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Status:{" "}
                <Box component="span" color="accent.main">
                  {pet?.healthStatus}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Size:{" "}
                <Box component="span" color="accent.main">
                  {pet?.size}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-3"
              >
                Medical History:{" "}
                <Box component="span" color="accent.main">
                  {pet?.medicalHistory}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-2"
              >
                Location:{" "}
                <Box component="span" color="accent.main">
                  {pet?.location}
                </Box>
              </Typography>
              <Typography fontSize={17} className="bg-[#efefef] rounded-lg p-5">
                Special Needs:{" "}
                <Box component="span" color="accent.main">
                  {pet?.specialNeeds}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 col-span-3"
              >
                Adoption Requirements:{" "}
                <Box component="span" fontSize={16} color="gray">
                  {pet?.adoptionRequirements}
                </Box>
              </Typography>
            </div>

            {/* image and description */}
            <Box
              sx={{
                background: "#efefef",
                border: "1px solid #efefef",
                borderRadius: "10px",
                padding: "30px",
              }}
              className="md:w-[1000px] space-y-5"
            >
              <Image
                src={pet?.photos[0]}
                alt="pet image"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <Typography fontSize={17} className="">
                * {pet?.description}
              </Typography>
              <Button
                fullWidth
                disableElevation
                endIcon={<PetsIcon />}
                color="secondary"
                component={Link}
                href={`/adopt-pet/${pet?.id}`}
              >
                Adopt This Pet
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SinglePetPage;
