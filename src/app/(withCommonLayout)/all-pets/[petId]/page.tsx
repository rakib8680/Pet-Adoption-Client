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
import EditOffIcon from "@mui/icons-material/EditOff";
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
  const pet: TPet = data?.data;

  
  return (
    <Container className="py-10 pb-40">
      <div className="space-y-10">
        <div>
          <Typography className=" !text-4xl lg:!text-6xl">
            Pet Profile
          </Typography>
          <Typography className=" !text-lg lg:!text-2xl">
            Detailed information about this pet
          </Typography>
        </div>
        <Divider>--- o ---</Divider>

        {isLoading ? (
          <div className="flex justify-center items-center h-[20vh]">
            <CircularProgress color="primary" sx={{ color: "#F2994A" }} />
          </div>
        ) : (

          <div className="flex flex-col-reverse lg:flex-row  justify-center gap-10 lg:gap-24 ">

            {/* pet details */}
            <div className="lg:grid grid-cols-3 gap-5 space-y-1 lg:space-y-0">
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Name:{" "}
                <Box component="span" color="accent.main">
                  {pet?.name}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Age:{" "}
                <Box component="span" color="accent.main">
                  {pet?.age}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Breed:{" "}
                <Box component="span" color="accent.main" sx={{fontSize:{lg:'18px'}}}>
                  {pet?.breed}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl col-span-2"
              >
                Temperament:{" "}
                <Box component="span" color="accent.main">
                  {pet?.temperament}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Gender:{" "}
                <Box component="span" color="accent.main">
                  {pet?.gender}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Species:{" "}
                <Box component="span" color="accent.main">
                  {pet?.species}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Status:{" "}
                <Box component="span" color="accent.main">
                  {pet?.healthStatus}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl"
              >
                Size:{" "}
                <Box component="span" color="accent.main">
                  {pet?.size}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl col-span-3"
              >
                Medical History:{" "}
                <Box component="span" color="accent.main">
                  {pet?.medicalHistory}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl col-span-2"
              >
                Location:{" "}
                <Box component="span" color="accent.main">
                  {pet?.location}
                </Box>
              </Typography>
              <Typography fontSize={17} className="bg-[#efefef] rounded-lg p-5 !font-mono lg:!text-xl">
                SpecialNeeds:{" "}
                <Box component="span" color="accent.main">
                  {pet?.specialNeeds}
                </Box>
              </Typography>
              <Typography
                className="bg-[#efefef] rounded-lg p-5 col-span-3 !font-mono lg:!text-xl"
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
                padding: { xs: "15px", lg: "25px"},
              }}
              className="max-w-[600px] space-y-5"
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
              {userInfo?.role === "USER" && (
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
              )}
              {userInfo?.role === "ADMIN" && (
                <Button
                  fullWidth
                  disableElevation
                  endIcon={<EditOffIcon />}
                  color="secondary"
                  sx={{ color: "white" }}
                  component={Link}
                  href={`/dashboard/admin/manage-pets/edit/${pet?.id}`}
                >
                  Edit Pet Info
                </Button>
              )}
            </Box>

          </div>
        )}
      </div>
    </Container>
  );
};

export default SinglePetPage;
