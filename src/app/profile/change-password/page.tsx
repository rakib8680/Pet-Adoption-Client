"use client";

import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import KeyIcon from "@mui/icons-material/Key";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordValidationSchema } from "@/utils/formValidation";
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const defaultValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};


const ChangePasswordPage = () => {
  
  const [error, setError] = useState<string>("");
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();


  // handle change password
  const handleChangePassword = async (data: FieldValues) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("New Passwords does not match");
      return;
    }

    const payload = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    try {
      const res = await changePassword(payload).unwrap();
      if (res?.success) {
        toast.success(res.message, {
          duration: 3500,
          style: { background: "#187f5b", color: "#ceffee" },
        });
        setError("");
        router.push("/profile");
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      // console.log(error);
      setError(error.message);
    }
  };


  return (
    <div
      className="min-h-screen  flex justify-center items-center bg-gradient-to-t from-[#1F2937] to-[#101625] px-3">
      <div>
        <div className="rounded-md  p-10 max-w-[500px] backdrop-filter backdrop-blur-lg bg-slate-600 bg-opacity-100 shadow-lg  ">
          <div className="flex justify-center items-center gap-2 pb-10 ">
            <KeyIcon fontSize="large" />
            <h1 className=" text-2xl lg:text-3xl font-semibold text-slate-300 ">
              Change Password
            </h1>
          </div>

          <PAC_Form
            onSubmit={handleChangePassword}
            resolver={zodResolver(changePasswordValidationSchema)}
            defaultValues={defaultValues}
          >
            <PAC_Input
              name="oldPassword"
              label="Old Password"
              type="text"
              color="secondary"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#efefef",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiFormLabel-root": {
                  color: "#C4C8CD ",
                },
                pb: 1,
              }}
            />
            <PAC_Input
              name="newPassword"
              label="New Password"
              type="text"
              color="secondary"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#efefef",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiFormLabel-root": {
                  color: "#C4C8CD ",
                },
                pb: 1,
              }}
            />
            <PAC_Input
              name="confirmPassword"
              label="Confirm Password"
              type="text"
              color="secondary"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#efefef",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiFormLabel-root": {
                  color: "#C4C8CD ",
                },
                pb: 1,
              }}
            />
            <div className="text-red-300 text-sm">{error}</div>
            <Button
              type="submit"
              disableElevation
              color="secondary"
              fullWidth
              sx={{ mb: 2, mt: 1 }}
            >
              Proceed
            </Button>
          </PAC_Form>
        </div>

        <Button
          className="!mt-10 flex"
          component={Link}
          href="/profile"
          variant="outlined"
          color="secondary"
          type="submit"
        >
          <ArrowBackIosIcon fontSize="small" />
          Back
        </Button>

      </div>
    </div>
  );
};

export default ChangePasswordPage;
