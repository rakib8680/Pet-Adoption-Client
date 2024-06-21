import { getUserInfo } from "@/services/auth.service";
import { Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";

const DashboardButton = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo?.role === "ADMIN" && (
        <Typography
          component={Link}
          href="/dashboard/admin"
          fontSize={15}
          className="bg-[#f4f4f4] p-2 rounded-lg"
        >
          <Tooltip title="Dashboard">
            <DashboardIcon />
          </Tooltip>
        </Typography>
      )}
    </>
  );
};

export default DashboardButton;
