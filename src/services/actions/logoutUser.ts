import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeAccessToken } from "../auth.service";
import { toast } from "sonner";

export const logOutUser = (router: AppRouterInstance) => {
  removeAccessToken();
  router.push("/");
  router.refresh();
  toast.info("You have been logged out", { duration: 3000 })
};
