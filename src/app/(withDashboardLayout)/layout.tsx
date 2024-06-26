"use client";

import DashboardDrawer from "@/components/Dashboard/Drawer/DashboardDrawer";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import getGreeting from "@/utils/greetingsGenerator";
import { CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";



const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = getUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else if (userInfo?.role !== "ADMIN") {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [router, userInfo]);


  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  

  return (
    <DashboardDrawer>
      <Typography
        color=""
        className=" lg:!ms-12 !my-5 !text-xs lg:!text-base"
      >
        {getGreeting()}...
      </Typography>
      {children}
    </DashboardDrawer>
  );
};

export default DashboardLayout;
