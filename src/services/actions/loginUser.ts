"use server";

import { TLoginInputs } from "@/app/login/page";

export const loginUser = async (userData: TLoginInputs) => {
  const res = await fetch(`${process.env.PET_ADOPTION_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });

  const data = await res.json();

  return data;
};
