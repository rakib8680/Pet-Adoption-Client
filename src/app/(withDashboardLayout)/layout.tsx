"use client";

import DashboardDrawer from "@/components/Dashboard/Drawer/DashboardDrawer";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const userInfo = getUserInfo();
  const router = useRouter();
  if (!isLoggedIn()) return router.push("/login");
  if (userInfo?.role !== "ADMIN") return router.push("/");

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
