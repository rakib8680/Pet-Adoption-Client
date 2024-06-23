import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { logOutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.service";
import { Avatar, Button, Stack, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  const { data, isLoading } = useGetMyProfileQuery({},{skip: !userInfo?.id});
  const myProfile = data?.data;

  //   logout function
  const handleLogout = () => {
    logOutUser(router);
  };

  return (
    <>
      {/* conditionally render login/logout button */}
      {userInfo?.id ? (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Tooltip
            title={myProfile?.email}
            className="cursor-pointer border-2 border-green-400"
          >
            <Avatar
              component={Link}
              href="/profile"
              src={myProfile?.profilePicture}
              alt="profile picture"
              sx={{ height: 50, width: 50 }}
            />
          </Tooltip>
          <Tooltip title="Log Out">
            <Button
              disableElevation
              color="error"
              onClick={handleLogout}
              className="w-10 h-10 !rounded-full"
            >
              <LogoutIcon />
            </Button>
          </Tooltip>
        </div>
      ) : (
        <Stack gap={1} sx={{
          display: {md: "flex" },
          flexDirection: {xs: "column", md: "row"},
          padding:{xs: "0 20px"}
        }}>
          <Button
            disableElevation
            color="secondary"
            component={Link}
            href="/login"
          >
            Login
          </Button>
          <Button
            disableElevation
            color="primary"
            component={Link}
            href="/register"
          >
            Register
          </Button>
        </Stack>
      )}
    </>
  );
};

export default AuthButton;
