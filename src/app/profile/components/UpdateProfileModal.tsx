import PAC_FileUploader from "@/components/Forms/PAC_FileUploader";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Modal from "@/components/Shared/Modal/PAC_Modal";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

const UpdateProfileModal = ({open,setOpen}:TProps) => {


    // file upload function
  const fileUploadHandler = (file:File) =>{
    console.log(file);

  }


  return (
     <div>
         <PAC_Modal open={open} setOpen={setOpen}  title="Update Profile Picture" >
                <PAC_FileUploader
                  sx={{ mt: 1 }}
                  name="file"
                  label="Update Profile"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                />

         </PAC_Modal>
     </div>
  )
};

export default UpdateProfileModal;