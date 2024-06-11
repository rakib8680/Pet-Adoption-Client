"use client";

import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import KeyIcon from "@mui/icons-material/Key";

const page = () => {
  // handle change password
  const handleChangePassword = async (data: FieldValues) => {
    try {
      //   const res = await loginUser(data);
      //   if (res?.success) {
      //     storeAccessToken(res?.data?.token);
      //     toast.success(res.message, { duration: 3000 });
      //     router.push("/");
      //   }else{
      //       setError(res.message);
      //       console.log(error);
      //   }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="min-h-screen  flex justify-center items-center   
    bg-gradient-to-t from-[#1F2937] to-[#101625] 
 "
    >
      <div className="rounded-md p-10 w-[500px] backdrop-filter backdrop-blur-lg bg-slate-600 bg-opacity-100 shadow-lg ">
        <div className="flex justify-center items-center gap-2 pb-10 ">
          <KeyIcon fontSize="large" />
          <h1 className="text-3xl font-semibold text-slate-300 ">
            Change Password
          </h1>
        </div>
        <PAC_Form onSubmit={handleChangePassword}>
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
    </div>
  );
};

export default page;
