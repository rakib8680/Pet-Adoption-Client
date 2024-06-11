"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import KeyIcon from "@mui/icons-material/Key";
import MyAdoptions from "@/components/Ui/ProfilePage/MyAdoptions/MyAdoptions";
import dummyImage from "@/assets/pet_avatar.jpg"

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
        <Tooltip title="Home">
          <Button
            disableElevation
            component={Link}
            href="/"
            className="w-10 h-10 !rounded-full"
          >
            <HomeIcon />
          </Button>
        </Tooltip>
        <AuthButton />
      </div>

      {/* Profile Information  */}
      <div className="md:flex  justify-center gap-24  mt-20
      bg-gradient-to-t from-[#fffefc] to-[#f4f4f4] rounded-2xl p-10
      ">
        {/* My details */}
        <div className="grid gap-5 items-center content-center">
          <Typography variant="h6" className="bg-[#efefef] rounded-lg p-5 px-8">
            Name:{" "}
            <Box component="span" color="accent.main">
              {myProfile?.name}
            </Box>
          </Typography>
          <Typography variant="h6" className="bg-[#efefef] rounded-lg p-5 px-8">
            Age:{" "}
            <Box component="span" color="accent.main">
              {myProfile?.age}
            </Box>
          </Typography>
          <Typography variant="h6" className="bg-[#efefef] rounded-lg p-5 px-8">
            Gender:{" "}
            <Box component="span" color="accent.main">
              {myProfile?.gender}
            </Box>
          </Typography>
          <Typography variant="h6" className="bg-[#efefef] rounded-lg p-5 px-8">
            Contact No:{" "}
            <Box component="span" color="accent.main">
              {myProfile?.contactNumber}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            className="bg-[#efefef] rounded-lg p-5 px-8 col-span-2"
          >
            Email:{" "}
            <Box component="span" color="accent.main">
              {myProfile?.email}
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

          <Button
            disableElevation
            component={Link}
            href="/profile/update"
            color="secondary"
          >
            Edit Details
            <EditOffIcon className="ml-2" />
          </Button>
          <Button
            disableElevation
            component={Link}
            href="/change-password"
            color="inherit"
          >
            Change Password
            <KeyIcon className="ml-2" />
          </Button>
        </div>

        {/* image and description */}
        <Box
          sx={{
            background: "#efefef",
            border: "1px solid #efefef",
            borderRadius: "10px",
            padding: "30px",
            width: "500px",
          }}
          className="md:w-[1000px] space-y-5"
        >
          <Image
            src={myProfile?.profilePicture || dummyImage}
            alt="myProfile image"
            width={500}
            height={500}
            className=" mx-auto my-auto bg-black p-4"
          />
        </Box>
      </div>


      {/* My Adoption Requests */}
      <div className="my-36 bg-gradient-to-t from-[#fffefc] to-[#f4f4f4] rounded-2xl p-10 
      ">
        <div className="space-y-2 pb-10">
          <Typography variant="h4" component="h2" textAlign="center">
            My Adoption Requests
          </Typography>
          <Typography variant="subtitle2" component="p" textAlign="center" color='gray'>
            All your adoption requests are listed here. You can view the status
            of your requests here.
          </Typography>
        </div>
        <MyAdoptions />
      </div>
    </div>
  );
};

export default ProfilePage;
