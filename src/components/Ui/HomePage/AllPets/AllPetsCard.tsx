import { getUserInfo } from "@/services/auth.service";
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
  const userInfo = getUserInfo();

  return (
    <Card
      sx={{
        boxShadow: "none",
        background: "#efefef",
        marginTop: "10px",
        borderRadius: "10px",
      }}
      className="md:w-[340px] h-[490px] px-3 flex flex-col justify-around py-3"
    >
      <CardMedia
        sx={{ height: "300px", borderRadius: "12px" }}
        image={
          pet.photos.length > 0 ? pet.photos[0] : "/src/assets/pet_avatar.jpg"
        }
      />
      <CardContent className="space-y-2 !pb-2">
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet.description.slice(0, 100)}...
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
        <Typography variant="body2" color="text.secondary">
          Location: {pet.location}
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
        {userInfo?.role !== "ADMIN" && (
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
        )}
      </CardActions>
    </Card>
  );
};

export default AllPetsCard;
