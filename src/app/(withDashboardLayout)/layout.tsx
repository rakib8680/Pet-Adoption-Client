"use client";

import DashboardDrawer from "@/components/Dashboard/Drawer/DashboardDrawer";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import getGreeting from "@/utils/greetingsGenerator";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const userInfo = getUserInfo();
  const router = useRouter();
  if (!isLoggedIn()) return router.push("/login");
  if (userInfo?.role !== "ADMIN") return router.push("/");

  return (
    <DashboardDrawer>
      <Typography
        color="accent.main"
        className="!ms-12 !my-5 
      "
      >
        {getGreeting()}...
      </Typography>
      {children}
    </DashboardDrawer>
  );
};

export default DashboardLayout;
