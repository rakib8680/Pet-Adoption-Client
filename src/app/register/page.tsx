"use client";

import Lottie from "lottie-react";
import registration_animation from "@/assets/registration_animation.json";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="h-screen bg-gradient-to-br from-[#fffded] to-[#fff4f4] ">
      {/* logo   */}
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        component={Link}
        p={4}
        href="/"
      >
        <Image
          src={logo2}
          alt="logo"
          quality={100}
          width={50}
          className="rounded-full"
        />
        <Typography fontWeight={600} fontSize={23}>
          <Box component="span" color="accent.main" className="font-black ">
            Pet
          </Box>{" "}
          Adoption Center 🐾
        </Typography>
      </Stack>

      {/* parent div  */}
      <div className=" container  mx-auto flex justify-center items-center h-[80vh] gap-40">
        {/* left side  */}
        <Lottie
          animationData={registration_animation}
          loop={true}
          className="w-[550px]"
        />

        {/* right side  */}
        <Box
          sx={{
            padding: "30px 50px",
            borderRadius: "15px",
            bgcolor: "#fff",
            maxWidth: "500px",
            width: "100%",
            marginRight: "100px",
          }}
        >
          {/* image and Text  */}
          <Stack spacing={2}>
            <Image
              src={logo2}
              alt="logo"
              width={70}
              style={{
                borderRadius: "50%",
                border: "1px solid #ccc",
                padding: "5px",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h4"
              color="primary"
              align="center"
              fontWeight="600"
              fontSize="30px"
              className="font-bold"
            >
              Sign Up
            </Typography>
            <Divider
              sx={{
                bgcolor: "primary.main",
                height: "2px",
                marginBottom: "20px",
              }}
            />
          </Stack>

          {/* main form  */}
          <Grid container spacing={2} my={1}>
            <Grid item md={12}>
              <TextField label="Your Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item md={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={12} sx={{ position: "relative" }}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
              />
              <Box
                sx={{
                  position: "absolute",
                  right: 15,
                  top: 30,
                  cursor: "pointer",
                  color: "accent.main",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Box>
            </Grid>
            <Grid item md={6}>
              <TextField label="Gender" variant="outlined" />
            </Grid>
            <Grid item md={6}>
              <TextField label="Age" type="number" variant="outlined" />
            </Grid>
            <Grid item md={12}>
              <TextField label="Profile URL" variant="outlined" fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField label="Location" variant="outlined" />
            </Grid>
            <Grid item md={6}>
              <TextField label="Contact Number" variant="outlined" />
            </Grid>
          </Grid>
          <Button disableElevation color="primary" sx={{ mb: 2, mt: 1 }}>
            Sign Up
          </Button>

          <Typography
            align="center"
            color="accent.main"
            fontSize="14px"
            fontWeight={100}
          >
            Already have an account?{" "}
            <Box
              color="secondary.main"
              component={Link}
              href="/login"
              className="hover:underline"
            >
              Login
            </Box>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default RegisterPage;
