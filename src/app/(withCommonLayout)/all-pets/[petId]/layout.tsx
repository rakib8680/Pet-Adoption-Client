"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { toast } from "sonner";

const PetDetailsLayout = ({ children }: { children: ReactNode }) => {
  const toastShownRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = () => {
      const loggedIn = isLoggedIn();
      if (!loggedIn && !toastShownRef.current) {
        toast.info("Please login to view this page", {
          duration: 2500,
          style: { backgroundColor: "#1F2937", color: "#EFEFEF" },
        });
        toastShownRef.current = true;
        router.push("/login");
      }
    };
    checkAuthentication();
  }, []);

  return isLoggedIn() ? <>{children}</> : null;
};

export default PetDetailsLayout;
