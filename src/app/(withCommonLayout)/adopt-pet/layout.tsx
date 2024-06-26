"use client";

import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const AdoptPetLayout = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const toastShownRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const checkAuthentication = () => {
      const loggedIn = isLoggedIn();
      if (!loggedIn && !toastShownRef.current) {
        toast.info("Please login to Adopt this pet", {
          duration: 2500,
          style: { backgroundColor: "#1F2937", color: "#EFEFEF" },
        });
        toastShownRef.current = true;
        router.push("/login");
      }
    };
    checkAuthentication();
  }, []);

  return isClient ? isLoggedIn() ? <>{children}</> : null : null;
};

export default AdoptPetLayout;
