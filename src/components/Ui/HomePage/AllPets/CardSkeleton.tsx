import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";

const CardSkeleton = () => {
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

        <CardMedia sx={{ height: "300px", borderRadius: "12px" }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="80%"
            animation="wave"
            className="rounded-lg"
          />
        </CardMedia>

        <CardContent className="space-y-2">
          <Skeleton variant="text" width="50%" animation="wave" />
          <div>
            <Skeleton variant="text" width="100%" animation="wave" />
            <Skeleton variant="text" width="100%" animation="wave" />
          </div>
          <Skeleton variant="text" width="40%" animation="wave" />
          <Skeleton variant="text" width="20%" animation="wave" />
        </CardContent>

        <CardActions className="flex">
          <Skeleton
            variant="rectangular"
            width="40%"
            height="40px"
            animation="wave"
            className="rounded-md"
          />
          <Skeleton
            variant="rectangular"
            width="40%"
            height="40px"
            animation="wave"
            className="rounded-md"
          />
        </CardActions>

      </Card>
  );
};

export default CardSkeleton;
