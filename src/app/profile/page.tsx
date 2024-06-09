"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";

const ProfilePage = () => {
  //  use this code to handle hydration error
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );

  const { data, isLoading } = useGetMyProfileQuery(undefined);

  const myProfile = data?.data;

  return (
    <div className="my-10">
      {/* buttons  */}
      <div className="flex justify-end items-center gap-10">
        <Button
          disableElevation
          component={Link}
          href="/"
          className="w-10 h-10 !rounded-full"
        >
          <HomeIcon />
        </Button>
        <AuthButton />
      </div>


      {/* main content  */}
      <div className="md:flex  justify-center gap-24 ">
            
            {/* My details */}
            <div className="grid grid-cols-3 gap-5">
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Name:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.name}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Age:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.age}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Breed:{" "}
                <Box component="span" color="accent.main" fontSize={14}>
                  {myProfile?.breed}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-2"
              >
                Temperament:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.temperament}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Gender:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.gender}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Species:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.species}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Status:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.healthStatus}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8"
              >
                Size:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.size}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-3"
              >
                Medical History:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.medicalHistory}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 px-8 col-span-2"
              >
                Location:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.location}
                </Box>
              </Typography>
              <Typography fontSize={17} className="bg-[#efefef] rounded-lg p-5">
                Special Needs:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.specialNeeds}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                className="bg-[#efefef] rounded-lg p-5 col-span-3"
              >
                Adoption Requirements:{" "}
                <Box component="span" fontSize={16} color="gray">
                  {myProfile?.adoptionRequirements}
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
                src={myProfile?.profilePicture}
                alt="myProfile image"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <Typography fontSize={17} className="">
                * {myProfile?.description}
              </Typography>
              <Button
                fullWidth
                disableElevation
                color="secondary"
                component={Link}
                href={`/adopt-myProfile/${myProfile?.id}`}
              >
                Adopt This Pet
              </Button>
            </Box>
          </div>
    </div>
  );
};

export default ProfilePage;
