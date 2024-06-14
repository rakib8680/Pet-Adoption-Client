import { getUserInfo } from "@/services/auth.service";
import { Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";


const DashboardButton = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo?.role === "ADMIN" && (
        <Typography component={Link} href="/dashboard/admin" fontSize={15}>
          <Tooltip title="Dashboard">
            <DashboardIcon />
          </Tooltip>
        </Typography>
      )}
    </>
  );
};

export default DashboardButton;
