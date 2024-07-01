
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Modal from "@/components/Shared/Modal/PAC_Modal";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import PAC_Input from "@/components/Forms/PAC_Input";
import PAC_Select from "@/components/Forms/PAC_Select";
import { Gender, HealthStatus, PetSize } from "@/types";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPetValidationSchema } from "@/utils/formValidation";
import AddIcon from '@mui/icons-material/Add';
import { useAddPetMutation } from "@/redux/api/petApi";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  


const AddPetModal = ({open, setOpen}:TProps) => {
  const [addPet] = useAddPetMutation();

  // add pet function
  const handleAddPet = async (data:FieldValues)=>{

        data.age = Number(data.age);
        data.photos = [data.photos];


        try {
            const res = await addPet(data).unwrap();
            if(res.success){
                toast.success(res?.message, {
                    duration: 3500,
                    style: { background: "#187f5b", color: "#ceffee" },
                  });
                setOpen(false);
            }            
        } catch (error) {
            toast.error("Something went wrong!");
        }
  }


// default values
  const defaultPetValues = {
    name: "",
    species: "",
    gender: "",
    age: 0,
    photos:"",
    healthStatus: "",
    breed: "",
    size: "",
    location: "",
    specialNeeds: "",
    temperament: "",
    medicalHistory: "",
    description: "",
    adoptionRequirements: "",
  };



  return (
     <div>
         <PAC_Modal title="Add a pet" open={open} setOpen={setOpen}>
         <Box
            sx={{
              padding: { xs: "0px", lg: "0px 50px" },
              maxWidth: "700px",
              width: "100%",
              bgcolor: "#fdfdfd",
              borderRadius: "10px",
            }}
          >
            {/* main form  ***********************************************************************************/}
            <PAC_Form
              onSubmit={handleAddPet}
              defaultValues={defaultPetValues}
              resolver={zodResolver(addPetValidationSchema)}
            >
              <Grid container spacing={1} sx={{my:{xs:'', lg:1}}}>
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
                  endIcon={<AddIcon />}
                >
                  Add
                </Button>
                <Button
                  disableElevation
                  color="inherit"
                  size="small"
                    onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </PAC_Form>
          </Box>
         </PAC_Modal>
     </div>
  )
};

export default AddPetModal;