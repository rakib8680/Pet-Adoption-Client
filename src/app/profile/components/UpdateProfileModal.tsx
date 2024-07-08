import PAC_FileUploader from "@/components/Forms/PAC_FileUploader";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Modal from "@/components/Shared/Modal/PAC_Modal";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

const UpdateProfileModal = ({open,setOpen}:TProps) => {


    // file upload function
  const handleFileUpload = (file:FieldValues) =>{
    console.log(file);

  }


  return (
     <div>
         <PAC_Modal open={open} setOpen={setOpen}  title="Update Profile Picture" >
               <div className="flex flex-col">
                <PAC_Form onSubmit={handleFileUpload}>
                  <PAC_FileUploader
                      sx={{ mt: 1 }}
                      name="file"
                      label="Update Profile"
                    />
                    <Button type="submit">Update</Button>
                    <Button>Cancel</Button>
                </PAC_Form>
               </div>
         </PAC_Modal>
     </div>
  )
};

export default UpdateProfileModal;