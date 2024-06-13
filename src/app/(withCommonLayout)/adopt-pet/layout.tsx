"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { toast } from "sonner";

const AdoptPetLayout = ({ children }: { children: ReactNode }) => {
  const [toastShown, setToastShown] = useState(false);
  const router = useRouter();

  if (!isLoggedIn() && !toastShown) {
    toast.info("Please login to Adopt this pet", {
      duration: 2500,
      style: { backgroundColor: "#1F2937", color: "#EFEFEF" },
    });
    setToastShown(true);
    return router.push("/login");
  }

  return <>{children}</>;
};

export default AdoptPetLayout;
