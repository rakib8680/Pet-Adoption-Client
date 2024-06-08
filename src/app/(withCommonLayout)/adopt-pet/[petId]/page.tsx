"use client";

import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import { useSubmitAdoptionRequestMutation } from "@/redux/api/adopionApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { adoptionRequestValidationSchema } from "@/utils/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    petId: string;
  };
};

const AdoptionRequestPage = ({ params }: TParams) => {

  
  // api calling
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const [submitAdoption] = useSubmitAdoptionRequestMutation();
  const myProfile = data?.data;



  // Adoption Request function
  const handleAdoptionRequest = async (values: FieldValues) => {
    const payload = {
      petId: params?.petId,
      ...values,
    };


    try {
      const res = await submitAdoption(payload).unwrap();
      if (res.success) {
        toast.success("Adoption request submitted successfully");
      }
    } catch (error: any) {
      toast.error(error.message, {
        duration: 3000,
        style: { backgroundColor: "#ffd6d6", color: "#960000" },
      });
    }
  };


  // Default values for form
  const AdoptionDefaultValues = {
    userName: myProfile?.name || "",
    userEmail: myProfile?.email || "",
    userContactNumber: "",
    petOwnershipExperience: "",
  };



  return (
    <div className="py-10 flex flex-col  items-center gap-5 ">

      <div className="text-center">
        <Typography variant="h4" color="secondary">
          Pet Adoption Request
        </Typography>
        <Typography variant="subtitle2" color="gray">
          Fill out the form below to request adoption. <br /> Our team will get
          back to you soon.
        </Typography>
      </div>

      <Divider
        sx={{ width: "20%", bgcolor: "secondary.main", height: "2px" }}
        className="!mb-5"
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Box
          sx={{
            padding: "30px 50px",
            borderRadius: "8px",
            bgcolor: "#EFEFEF",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          {/* main form  ***********************************************************************************/}
          <PAC_Form
            onSubmit={handleAdoptionRequest}
            resolver={zodResolver(adoptionRequestValidationSchema)}
            defaultValues={AdoptionDefaultValues}
          >
            <Grid container spacing={2} my={1}>
              {/* userName */}
              <Grid item md={12}>
                <PAC_Input
                  color="secondary"
                  label="Your Name"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                  name="userName"
                />
              </Grid>
              {/* email  */}
              <Grid item md={12}>
                <PAC_Input
                  label="Email"
                  type="email"
                  sx={{ bgcolor: "white" }}
                  color="secondary"
                  fullWidth
                  name="userEmail"
                />
              </Grid>
              {/* Contact No.  */}
              <Grid item md={12}>
                <PAC_Input
                  label="Contact Number"
                  sx={{ bgcolor: "white" }}
                  color="secondary"
                  name="userContactNumber"
                  fullWidth
                />
              </Grid>
              {/* Pet Ownership Experience  */}
              <Grid item md={12}>
                <PAC_Input
                  label="Pet Ownership Experience"
                  sx={{ bgcolor: "white" }}
                  color="secondary"
                  multiline
                  rows={4}
                  fullWidth
                  name="petOwnershipExperience"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disableElevation
              fullWidth
              color="secondary"
              sx={{ color: "white" }}
              size="small"
            >
              Adopt Pet
            </Button>
          </PAC_Form>
        </Box>
      )}
    </div>
  );
};

export default AdoptionRequestPage;
