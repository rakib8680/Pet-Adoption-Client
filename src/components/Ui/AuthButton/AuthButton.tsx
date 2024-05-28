import { logOutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.service";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  //   logout function
  const handleLogout = () => {
    logOutUser(router);
  };

  return (
    <>
      {/* conditionally render login/logout button */}
      {userInfo?.id ? (
        <Button disableElevation color="error" onClick={handleLogout}>
          LogOut
        </Button>
      ) : (
        <Stack gap={1} direction="row">
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
