import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeAccessToken } from "../auth.service";

export const logOutUser = (router: AppRouterInstance) => {
  removeAccessToken();
  router.push("/");
  router.refresh();
};
