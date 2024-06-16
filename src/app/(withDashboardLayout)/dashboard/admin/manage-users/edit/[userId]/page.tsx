"use client";

import { Box, Button, CircularProgress, Grid } from "@mui/material";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import PAC_Select from "@/components/Forms/PAC_Select";
import { Gender } from "@/types";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { Typography } from "@mui/material";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import Link from "next/link";

type TParams = {
  params: {
    userId: string;
  };
};



const UpdateUserPage = ({ params }: TParams) => {
  const { userId } = params;
  const [updateUser] = useUpdateUserMutation();
  const { data, isLoading, isFetching } = useGetSingleUserQuery(userId);
  const userProfile = data?.data;



  // update profile
  const handleEditProfile = async (data: FieldValues) => {
    data.age = Number(data.age);

    const payload = {
      id: userId,
      data,
    };

    try {
      const res = await updateUser(payload).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          duration: 3500,
          style: { background: "#187f5b", color: "#ceffee" },
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };



  // default values
  const defaultProfileValues = {
    name: userProfile?.name || "",
    gender: userProfile?.gender || "",
    age: userProfile?.age || 0,
    profilePicture: userProfile?.profilePicture || "",
    location: userProfile?.location || "",
    contactNumber: userProfile?.contactNumber || "",
  };



  return (
    <div className="container max-w-6xl mx-auto space-y-5 pb-10">

      <Typography
        className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 rounded-lg  text-center"
        sx={{ fontSize: "25px", p: "30px 0" }}
      >
        {userProfile ? `Update ${userProfile.name}'s Info` : "Edit Profile"}
      </Typography>

      <div className="flex justify-center items-center bg-gradient-to-b from-[#F5F5F5] to-gray-50 rounded-lg py-10  px-10">

        {isLoading || isFetching ? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgress color="secondary" />
          </div>
        ) : (

          <Box
            sx={{
              padding: "0px 50px",
              maxWidth: "700px",
              bgcolor: "#fdfdfd",
              borderRadius: "10px",
            }}
          >
            {/* main form  ***********************************************************************************/}
            <PAC_Form
              onSubmit={handleEditProfile}
              defaultValues={data && defaultProfileValues}
            >
              <Grid container spacing={4} my={1}>
                {/* name */}
                <Grid item md={12}>
                  <PAC_Input
                    label="Your Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="name"
                  />
                </Grid>
                {/* gender  */}
                <Grid item md={12}>
                  <PAC_Select
                    items={Gender}
                    name="gender"
                    label="Gender"
                    fullWidth
                    color="secondary"
                  />
                </Grid>
                {/* age  */}
                <Grid item md={12}>
                  <PAC_Input
                    label="Age"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="age"
                  />
                </Grid>
                {/* profile photo  */}
                <Grid item md={12}>
                  <PAC_Input
                    label="Profile URL"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    name="profilePicture"
                  />
                </Grid>
                {/* location  */}
                <Grid item md={12}>
                  <PAC_Input
                    label="Location"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="location"
                  />
                </Grid>
                {/* contact  */}
                <Grid item md={12}>
                  <PAC_Input
                    label="Contact Number"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="contactNumber"
                  />
                </Grid>
              </Grid>
              {/* action buttons */}
              <div className="flex justify-between py-5">
                <Button
                  type="submit"
                  disableElevation
                  color="secondary"
                  size="small"
                >
                  Update
                </Button>
                <Button
                  component={Link}
                  href="/dashboard/admin/manage-users"
                  disableElevation
                  color="inherit"
                  size="small"
                >
                  Back
                </Button>
              </div>
            </PAC_Form>
          </Box>

        )}
      </div>
    </div>
  );
};

export default UpdateUserPage;
