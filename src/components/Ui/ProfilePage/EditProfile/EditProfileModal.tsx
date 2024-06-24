import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import PAC_Select from "@/components/Forms/PAC_Select";
import { Gender } from "@/types";
import {
  useGetMyProfileQuery,
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};




const EditProfileModal = ({ open, setOpen }: TProps) => {

  const [updateProfile] = useUpdateMyProfileMutation();
  const { data, isLoading } = useGetMyProfileQuery({});
  const myProfile = data?.data;



  // update profile
  const handleEditProfile = async (data: FieldValues) => {
    data.age = Number(data.age);

    try {
      const res = await updateProfile(data).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          duration: 3500,
          style: { background: "#187f5b", color: "#ceffee" },
        });
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };



  // default values
  const defaultProfileValues = {
    name: myProfile?.name,
    gender: myProfile?.gender,
    age: myProfile?.age,
    profilePicture: myProfile?.profilePicture,
    location: myProfile?.location,
    contactNumber: myProfile?.contactNumber,
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{ textAlign: "center", fontSize: "25px", p: "30px 0",}}
        id="customized-dialog-title"
      >
        Update Your Information
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <Box
            sx={{
              padding: "0px 50px",
              maxWidth: "500px",
            }}
          >

            {/* main form  ***********************************************************************************/}
            <PAC_Form
              onSubmit={handleEditProfile}
              defaultValues={defaultProfileValues}
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
                <Grid item md={6}>
                  <PAC_Select
                    items={Gender}
                    name="gender"
                    label="Gender"
                    color="secondary"
                  />
                </Grid>
                {/* age  */}
                <Grid item md={6}>
                  <PAC_Input
                    label="Age"
                    type="number"
                    variant="outlined"
                    color="secondary"
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
                <Grid item md={6}>
                  <PAC_Input
                    label="Location"
                    variant="outlined"
                    color="secondary"
                    name="location"
                  />
                </Grid>
                {/* contact  */}
                <Grid item md={6}>
                  <PAC_Input
                    label="Contact Number"
                    variant="outlined"
                    color="secondary"
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
                  disableElevation
                  color="inherit"
                  size="small"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </PAC_Form>

          </Box>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default EditProfileModal;
