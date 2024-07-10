import PAC_FileUploader from "@/components/Forms/PAC_FileUploader";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Modal from "@/components/Shared/Modal/PAC_Modal";
import imageUpload from "@/utils/imageUploader";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateProfileModal = ({ open, setOpen }: TProps) => {


  // file upload function
  const handleFileUpload = async(file: FieldValues) => {
    // console.log(file);
      
    // try {
    //   const imageData = await imageUpload(file)
    //   console.log(imageData);
    // } catch (error) {
    //   console.log(error);
    // }
  };




  return (
    <div>
      <PAC_Modal open={open} setOpen={setOpen} title="Update Profile Picture">
        <PAC_Form onSubmit={handleFileUpload}>
          <Box
            sx={{
              padding: "20px",
              width: { xs: "300px", lg: "350px" },
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 p-5 rounded-lg lg:!px-10 space-y-8 lg:!py-14"
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={12} xs={12}>
                <PAC_FileUploader
                  sx={{
                    mt: 1,
                    bgcolor: "inherit",
                    border: "2px dashed #ccc",
                    borderRadius: "5px",
                    padding: "30px",
                    ":hover": {
                      bgcolor: "white",
                      border: "2px dashed #aaa",
                    },
                  }}
                  name="file"
                  label="Select Photo"
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className="flex justify-between lg:!-mb-5 !mt-10">
              <Button disableElevation color="secondary" type="submit">
                Update
              </Button>
              <Button
                disableElevation
                color="inherit"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </PAC_Form>
      </PAC_Modal>
    </div>
  );
};

export default UpdateProfileModal;
