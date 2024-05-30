import { TPet } from "@/types/pet";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const AllPetsCard = ({ pet }: { pet: TPet }) => {
    console.log(pet);

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          background: "#efefef",
          marginTop: "10px",
          borderRadius: "10px",
        }}
        className="w-[350px] h-[430px] px-3"
      >
        <CardMedia
          sx={{ height: 180 }}
          image={
            pet.photos.length > 0 ? pet.photos[0] : "/src/assets/pet_avatar.jpg"
          }
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={600}
          >
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pet.description}
          </Typography>
        </CardContent>
        <CardActions >
          <Button disableElevation size="small">
            View Pet
          </Button>
          <Button
            disableElevation
            size="small"
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Adopt
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AllPetsCard;
