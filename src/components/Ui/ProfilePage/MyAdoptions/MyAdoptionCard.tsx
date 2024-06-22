import { TPet } from "@/types/pet";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteMyAdoptionRequestMutation } from "@/redux/api/adopionApi";
import Swal from "sweetalert2";

const MyAdoptionCard = ({ adoption }: any) => {
  const pet = adoption.pet as TPet;
  // console.log(adoption);

  const [deleteAdoption] = useDeleteMyAdoptionRequestMutation();

  const handleDeleteAdoptionRequest = async (id: string) => {
    try {

      Swal.fire({
        title: "Remove This Request ?",
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick: false,
        showCloseButton: true,
        background: "#1F2937",
        iconColor: "#E5D7B6",
        color: "#E5D7B6",
        padding: "0 0 4rem 0",
        confirmButtonColor: "#d35b00",
        cancelButtonColor: "#48565E",
        confirmButtonText: "Remove",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteAdoption(id).unwrap();
          if (res.success) {
            Swal.fire({
              title: "Request Removed Successfully !",
              icon: "success",
              background: "#1F2937",
              iconColor: "#E5D7B6",
              color: "#E5D7B6",
              padding: "0 0 4rem 0",
              confirmButtonColor: "#d35b00",
            });
          }
        }
      });

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Card
      sx={{
        boxShadow: "none",
        background: "#efefef",
        marginTop: "10px",
        borderRadius: "10px",
      }}
      className="w-[350px] h-[480px] px-3 flex flex-col justify-around py-3 "
    >
      <CardMedia
        sx={{ height: "300px", borderRadius: "12px" }}
        image={
          pet?.photos.length > 0 ? pet?.photos[0] : "/src/assets/pet_avatar.jpg"
        }
      />

      <CardContent className="space-y-2">
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          {pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {pet?.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {pet?.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {pet?.breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {pet?.size}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          disableElevation
          size="small"
          fullWidth
          color="inherit"
          onClick={() => handleDeleteAdoptionRequest(adoption.id)}
        >
          Remove Request <DeleteIcon className="ml-2" />
        </Button>
      </CardActions>
      
    </Card>
  );
};

export default MyAdoptionCard;
