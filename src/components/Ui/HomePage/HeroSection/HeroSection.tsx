import { Typography, Button, Box, Container, } from "@mui/material";
import Image from "next/image";
import heroImage from "@/assets/adopt_pet.png";
import heroImage2 from "@/assets/adopt_pet2.png";
import heroImage3 from "@/assets/adopt_pet3.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="lg:py-32 bg-[#efefef] pb-40">
        <Container maxWidth="xl">
          <div className="lg:flex justify-center items-center lg:gap-40 2xl:gap-80">
            {/* hero text  */}
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{ mb: 2, fontWeight: "bold", color: "#77B5A0" }}
              >
                Find Your Fur-ever Friend
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                color="textSecondary"
                sx={{ mb: 4 }}
              >
                Open your heart and home to a loving companion.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                We connect abandoned and rescued animals with caring families.
                Discover the joy of pet parenthood and change a life forever.
              </Typography>
              <Button
                disableElevation
                component={Link}
                href="/all-pets"
                variant="contained"
                sx={{ bgcolor: "#F2994A" }}
              >
                Browse Pets
              </Button>
            </Box>

            {/* hero image  */}
            <div className="flex justify-center gap-2 items-center relative">
              <Image
                src={heroImage}
                alt="Hero Image"
                className="rounded-lg border-4 border-white  border-opacity-50  w-44 md:w-64  2xl:w-96   relative top-28 lg:top-10"
              />
              <Image
                src={heroImage2}
                alt="Hero Image"
                className="rounded-lg border-4 border-white  border-opacity-50 w-40 md:w-56 2xl:w-80  absolute top-16 lg:-top-10 z-10"
              />
              <Image
                src={heroImage3}
                alt="Hero Image"
                className="rounded-lg border-4 border-white  border-opacity-50  w-44 md:w-64   2xl:w-96  relative top-28 lg:top-10 "
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
