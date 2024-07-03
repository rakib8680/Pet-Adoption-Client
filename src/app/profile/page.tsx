"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import KeyIcon from "@mui/icons-material/Key";
import dummyImage from "@/assets/pet_avatar.jpg";
import { useState } from "react";
import EditProfileModal from "@/components/Ui/ProfilePage/EditProfile/EditProfileModal";
import { getUserInfo } from "@/services/auth.service";
import { logOutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import logo2 from "@/assets/logo2.png";
import UpdateProfileModal from "./components/UpdateProfileModal";




const ProfilePage = () => {



  //  use this code to handle hydration error
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  const DashboardButton = dynamic(
    () => import("@/components/Ui/DashboardButton/DashboardButton"),
    { ssr: false }
  );
  const MyAdoptionRequests = dynamic(
    () => import("@/app/profile/components/MyAdoptionRequests")
  );

  
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const myProfile = data?.data;
  const userInfo = getUserInfo();


  //   logout function
  const handleLogout = () => {
    logOutUser(router);
  };




  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // responsive user menu
  const userMenu = (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Profile" src={myProfile?.profilePicture} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={handleCloseUserMenu}
          className="flex flex-col gap-5 !items-center  !p-6 !px-2 !rounded-xl bg-[#f4f4f4]"
          sx={{}}
        >
          <Typography
            component={Link}
            href="/"
            className="bg-[#f4f4f4] p-2 rounded-lg"
          >
            <HomeIcon />
          </Typography>
          <DashboardButton />
          <Button
            disableElevation
            color="error"
            onClick={handleLogout}
            className="w-2 h-10 !rounded-full !mt-5"
          >
            <LogoutIcon />
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );





  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center lg:h-[70vh] h-screen">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div
          className={` mb-28  lg:my-10  container mx-auto ${
            userInfo?.role === "ADMIN" && "min-h-screen"
          }`}
        >
          {/* buttons  */}
          <div className=" hidden lg:flex flex-col lg:flex-row justify-end items-center gap-10 ">
            <Tooltip title="Home">
              <Typography
                component={Link}
                href="/"
                className="bg-[#f4f4f4] p-2 rounded-lg"
                fontSize={15}
              >
                <HomeIcon />
              </Typography>
            </Tooltip>
            <DashboardButton />
            <AuthButton />
          </div>

          {/* responsive user menu  */}
          <div className="lg:hidden flex justify-between items-center px-5 py-10">
            {/* logo   */}
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              component={Link}
              href="/"
            >
              <Image
                src={logo2}
                alt="logo"
                quality={100}
                width={40}
                className="rounded-full"
              />
              <Typography fontWeight={600} fontSize={15}>
                <Box
                  component="span"
                  color="accent.main"
                  className="font-black "
                >
                  Pet
                </Box>{" "}
                Adoption Center 🐾
              </Typography>
            </Stack>
            {userMenu}
          </div>



          {/* Profile Information  */}
          <div
            className={`flex flex-col-reverse lg:flex-row  justify-center gap-8 lg:gap-24  lg:mt-20 bg-gradient-to-t from-[#fffefc] to-[#f4f4f4] lg:rounded-2xl pt-5 px-6 lg:py-10`}
          >
            {/* My details */}
            <div className="lg:grid gap-5 items-center content-center space-y-1  lg:space-y-0 ">
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl">
                Name:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.name}
                </Box>
              </Typography>
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl">
                Age:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.age}
                </Box>
              </Typography>
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl">
                Gender:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.gender}
                </Box>
              </Typography>
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 !font-mono lg:!text-xl">
                Contact No:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.contactNumber}
                </Box>
              </Typography>
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 col-span-2 !font-mono lg:!text-xl">
                Email:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.email}
                </Box>
              </Typography>
              <Typography className="bg-[#efefef] rounded-lg p-3 lg:p-5 px-8 col-span-2 !font-mono lg:!text-xl">
                Location:{" "}
                <Box component="span" color="accent.main">
                  {myProfile?.location}
                </Box>
              </Typography>

              <Button
                disableElevation
                color="secondary"
                onClick={() => setOpen(!open)}
                fullWidth
                className="!mt-10 !mb-2 lg:!mb-0 lg:!mt-0"
              >
                Edit Details
                <EditOffIcon className="ml-2" />
              </Button>
              <Button
                disableElevation
                component={Link}
                href="/profile/change-password"
                color="inherit"
                fullWidth
              >
                Change Password
                <KeyIcon className="ml-2" />
              </Button>
            </div>

            {/* edit details modal  */}
            <EditProfileModal open={open} setOpen={setOpen} />

            {/* image and description */}
            <div>
              <Box
                sx={{
                  background: "#efefef",
                  border: "1px solid #efefef",
                  borderRadius: "10px",
                  padding: "30px",
                  maxWidth: "500px",
                  width: "100%",
                }}
                className=""
              >
                <Image
                  src={myProfile?.profilePicture || dummyImage}
                  alt="myProfile image"
                  width={500}
                  height={500}
                  className=" mx-auto my-auto bg-black p-4"
                />
              </Box>

              <Button
                endIcon={<EditOffIcon />}
                disableElevation
                color="secondary"
                fullWidth
                onClick={() => setIsModalOpen(!isModalOpen)}
                >
                Update Profile Picture
              </Button>

                {/* Update Profile modal  */}
              <UpdateProfileModal open={isModalOpen} setOpen={setIsModalOpen} />
            </div>
          </div>

          {/* My Adoption Requests */}
          <MyAdoptionRequests userInfo={userInfo} />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
