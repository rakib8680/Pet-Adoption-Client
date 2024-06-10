
import { TPet } from "@/types/pet";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";





const MyAdoptionCard = ({adoption}:any) => {


    const pet = adoption.pet as TPet;
    console.log(adoption);

  return (
    <Card
    sx={{
      boxShadow: "none",
      background: "#efefef",
      marginTop: "10px",
      borderRadius: "10px",
    }}
    className="w-[350px] h-[480px] px-3 flex flex-col justify-around py-3"
  >
    <CardMedia
      sx={{ height: '300px', borderRadius: "12px" }}
      image={
        pet.photos.length > 0 ? pet.photos[0] : "/src/assets/pet_avatar.jpg"
      }
    />
    <CardContent className="space-y-2">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontWeight={600}
      >
        {pet.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Location: {pet.location}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Age: {pet.age}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Breed: {pet.breed}
      </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {pet.size}
        </Typography>
    </CardContent>
    <CardActions>
      <Button
        disableElevation
        size="small"
        component={Link}
        href={`/all-pets/${pet.id}`}
      >
        View Pet
      </Button>
      <Button
        disableElevation
        component={Link}
        href={`/adopt-pet/${pet.id}`}
        size="small"
        variant="contained"
        color="secondary"
        sx={{ color: "white" }}
      >
        Adopt
      </Button>
    </CardActions>
  </Card>
  )
};

export default MyAdoptionCard;