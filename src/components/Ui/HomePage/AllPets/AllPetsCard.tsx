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

const AllPetsCard = ({ pet }: { pet: TPet }) => {
  // console.log(pet);

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          background: "#efefef",
          marginTop: "10px",
          borderRadius: "10px",
        }}
        className="w-[350px] h-[430px] px-3 flex flex-col justify-around py-3"
      >
        <CardMedia
          sx={{ height: 180, borderRadius: "12px" }}
          image={
            pet.photos.length > 0 ? pet.photos[0] : "/src/assets/pet_avatar.jpg"
          }
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
        <CardActions>
          <Button disableElevation size="small" component={Link} href={`/all-pets/${pet.id}`}>
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
