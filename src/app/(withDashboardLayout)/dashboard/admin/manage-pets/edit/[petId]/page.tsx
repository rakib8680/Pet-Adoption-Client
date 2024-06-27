"use client";

import { Box, Button, CircularProgress, Grid } from "@mui/material";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import PAC_Select from "@/components/Forms/PAC_Select";
import { Gender, HealthStatus, PetSize } from "@/types";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useGetSinglePetQuery, useUpdatePetMutation } from "@/redux/api/petApi";
import { useRouter } from "next/navigation";

type TParams = {
  params: {
    petId: string;
  };
};  



const EditPetPage = ({ params }: TParams) => {
  
  const { petId } = params;
  const router = useRouter();
  const [updatePet] = useUpdatePetMutation();
  const { data, isLoading } = useGetSinglePetQuery(petId);
  const singlePet = data?.data;



  // update Pet
  const handleEditPet = async (data: FieldValues) => {
    data.age = Number(data.age);
    data.photos = [data.photos];

    const payload = {
      id: petId,
      data,
    };

    try {
      const res = await updatePet(payload).unwrap();
      if (res.success) {
        toast.success("Pet Information Updated !", {
          duration: 3500,
          style: { background: "#187f5b", color: "#ceffee" },
        });
        router.push("/dashboard/admin/manage-pets");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };



  // default values
  const defaultPetValues = {
    name: singlePet?.name || "",
    species: singlePet?.species || "",
    gender: singlePet?.gender || "",
    age: singlePet?.age || 0,
    photos: singlePet?.photos[0] || "",
    healthStatus: singlePet?.healthStatus || "",
    breed: singlePet?.breed || "",
    size: singlePet?.size || "",
    location: singlePet?.location || "",
    specialNeeds: singlePet?.specialNeeds || "",
    temperament: singlePet?.temperament || "",
    medicalHistory: singlePet?.medicalHistory || "",
    description: singlePet?.description || "",
    adoptionRequirements: singlePet?.adoptionRequirements || "",
  };


  return (
    <div className="container max-w-6xl mx-auto space-y-5 pb-10">
      <Typography
        className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 rounded-lg  text-center !font-mono !font-semibold"
        sx={{ fontSize: {xs:'19px', lg:"25px"}, p: {xs:'10px 0', lg:"30px 0"} }}
      >
        {singlePet ? `Update ${singlePet.name}'s Info` : "Edit Profile"}
      </Typography>

      <div className="flex justify-center items-center bg-gradient-to-b from-[#F5F5F5] to-gray-50 rounded-lg p-3  lg:p-10">
        {isLoading? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <Box
            sx={{
              padding: { xs: "0px 20px", lg:"0px 50px"},
              maxWidth: "700px",
              bgcolor: "#fdfdfd",
              borderRadius: "10px",
            }}
          >
            {/* main form  ***********************************************************************************/}
            <PAC_Form
              onSubmit={handleEditPet}
              defaultValues={data && defaultPetValues}
            >
              <Grid container spacing={4} sx={{my:{xs:'5px', lg:1}}}>
                {/* name */}
                <Grid item md={6} xs={6}>
                  <PAC_Input
                    label="Pet Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="name"
                  />
                </Grid>
                {/* species */}
                <Grid item md={6} xs={6}>
                  <PAC_Input
                    label="Species"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="species"
                  />
                </Grid>
                {/* gender  */}
                <Grid item md={6} xs={6}>
                  <PAC_Select
                    items={Gender}
                    name="gender"
                    label="Gender"
                    fullWidth
                    color="secondary"
                  />
                </Grid>
                {/* age  */}
                <Grid item md={6} xs={6}>
                  <PAC_Input
                    label="Age"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="age"
                  />
                </Grid>
                {/* Health Status  */}
                <Grid item md={6} xs={6}>
                  <PAC_Select
                    items={HealthStatus}
                    name="healthStatus"
                    label="Health Status"
                    fullWidth
                    color="secondary"
                  />
                </Grid>
                {/* Size  */}
                <Grid item md={6} xs={6}>
                  <PAC_Select
                    items={PetSize}
                    name="size"
                    label="Size"
                    fullWidth
                    color="secondary"
                  />
                </Grid>
                {/* Photos */}
                <Grid item md={12} xs={12}>
                  <PAC_Input
                    label="Profile URL"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    name="photos"
                  />
                </Grid>
                {/* location  */}
                <Grid item md={6} xs={12}>
                  <PAC_Input
                    label="Location"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="location"
                  />
                </Grid>
                {/* specialNeeds  */}
                <Grid item md={6} xs={12}>
                  <PAC_Input
                    label="Special Needs"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="specialNeeds"
                  />
                </Grid>
                {/* Breed  */}
                <Grid item md={6} xs={6}>
                  <PAC_Input
                    label="Breed"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="breed"
                  />
                </Grid>
                {/* temperament  */}
                <Grid item md={6} xs={6}>
                  <PAC_Input
                    label="Temperament"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="temperament"
                  />
                </Grid>
                {/* medicalHistory  */}
                <Grid item md={12} xs={12}>
                  <PAC_Input
                    label="Medical History"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="medicalHistory"
                  />
                </Grid>
                {/* description  */}
                <Grid item md={12} xs={12}>
                  <PAC_Input
                    label="Description"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={3}
                    name="description"
                  />
                </Grid>
                {/* adoptionRequirements  */}
                <Grid item md={12} xs={12}>
                  <PAC_Input
                    label="Adoption Requirements"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={3}
                    name="adoptionRequirements"
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
                  href="/dashboard/admin/manage-pets"
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

export default EditPetPage;
