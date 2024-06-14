'use client'

import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const userInfo = getUserInfo();
  const router = useRouter();
  if(!isLoggedIn()) return router.push("/login");
  if (userInfo?.role !== "ADMIN") return router.push("/");

  return <>{children}</>;
};

export default DashboardLayout;
