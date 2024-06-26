import PAC_Modal from "@/components/Shared/Modal/PAC_Modal";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Select from "@/components/Forms/PAC_Select";
import { AdoptionStatus } from "@/types";
import { FieldValues } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { toast } from "sonner";
import { useUpdateAdoptionRequestMutation } from "@/redux/api/adopionApi";

type TProps = {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};



const ChangeAdoptionStatusModal = ({ id, open, setOpen }: TProps) => {
  const [updateAdoptionStatus] = useUpdateAdoptionRequestMutation();



  const handleChangeStatus = async (data: FieldValues) => {
    const payload = {
      id: id,
      data,
    };

    try {
      const res = await updateAdoptionStatus(payload).unwrap();
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

  

  return (
    <PAC_Modal open={open} setOpen={setOpen} title="Update Adoption Status">
      <PAC_Form onSubmit={handleChangeStatus} defaultValues={{ status: "" }}>
        <Box
          sx={{
            padding: "20px",
            maxWidth: "350px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
          className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 p-5 rounded-lg lg:!px-10 space-y-8 lg:!py-14"
        >
          <PAC_Select
            items={AdoptionStatus}
            name="status"
            label="Status"
            fullWidth
            color="secondary"
          />
          <Button disableElevation fullWidth color="secondary" type="submit">
            Update
          </Button>
        </Box>
      </PAC_Form>
    </PAC_Modal>
  );
};

export default ChangeAdoptionStatusModal;
