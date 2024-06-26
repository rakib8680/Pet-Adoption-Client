"use client";

import Lottie from "lottie-react";
import registration_animation from "@/assets/registration_animation.json";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FieldValues } from "react-hook-form";
import { registerUser } from "@/services/actions/registerUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeAccessToken } from "@/services/auth.service";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/utils/formValidation";
import PAC_Select from "@/components/Forms/PAC_Select";
import { Gender } from "@/types";

export type TUserRegistrationInputs = {
  name: string;
  email: string;
  password: string;
  gender: string;
  profilePicture: string;
  age: number;
  location: string;
  contactNumber: string;
};

const registerDefaultValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
  profilePicture: "",
  age: 0,
  location: "",
  contactNumber: "",
};



const RegisterPage = () => {

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();



  // Register user function
  const handleRegistration = async (data: FieldValues) => {
    data.age = Number(data.age);

    try {
      const res = await registerUser(data);
      if (res.success) {
        toast.success(res.message, { duration: 3000 });

        // Login user after registration
        const loginData = await loginUser({
          email: data.email,
          password: data.password,
        });
        if (loginData?.success) {
          storeAccessToken(loginData?.data?.token);
          router.push("/");
        }
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  


  return (
    <div className="  lg:h-screen bg-gradient-to-br from-[#fffded] to-[#fff4f4] ">

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
      <div className=" container  mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:h-[80vh] gap-10 lg:gap-40 px-5 lg:px-0">


        {/* left side  */}
        <Lottie
          animationData={registration_animation}
          loop={true}
          className="md:w-[550px] px-3 lg:px-0 pb-10 lg:pb-0"
        />



        {/* right side  */}
        <Box
          sx={{
            padding: { xs: "40px 30px", lg: "30px 50px" },
            borderRadius: "15px",
            bgcolor: "#fff",
            maxWidth: "500px",
            width: "100%",
            marginRight: { xs: "0px", lg: "100px" },
            marginTop: { xs: "30px", lg: "0px" },
          }}
        >
          {/* image and Text  */}
          <Stack spacing={2}>
            <Image
              src={logo2}
              alt="logo"
              width={70}
              className="hidden lg:block"
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

          {/* server error */}
          <Box>
            {error && (
              <Typography
                color="accent.main"
                sx={{ fontSize: 15, fontWeight: 400, mt: 2 }}
              >
                {error}
              </Typography>
            )}
          </Box>


          {/* main form  ***********************************************************************************/}
          <PAC_Form
            onSubmit={handleRegistration}
            resolver={zodResolver(registerValidationSchema)}
            defaultValues={registerDefaultValues}
          >
            <Grid container spacing={2} my={1}>
              {/* name */}
              <Grid item md={12} xs={12}>
                <PAC_Input
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="name"
                />
              </Grid>
              {/* email  */}
              <Grid item md={12} xs={12}>
                <PAC_Input
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="email"
                />
              </Grid>
              {/* password  */}
              <Grid item md={12} xs={12} sx={{ position: "relative" }}>
                <PAC_Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="password"
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: 15,
                    top: 25,
                    cursor: "pointer",
                    color: "accent.main",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </Box>
              </Grid>
              {/* gender  */}
              <Grid item md={6} xs={6}>
                <PAC_Select
                  items={Gender}
                  name="gender"
                  label="Gender"
                  size="small"
                  sx={{}}
                />
              </Grid>
              {/* age  */}
              <Grid item md={6} xs={6}>
                <PAC_Input
                  label="Age"
                  type="number"
                  variant="outlined"
                  size="small"
                  name="age"
                />
              </Grid>
              {/* profile  */}
              <Grid item md={12} xs={12}>
                <PAC_Input
                  label="Profile URL"
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="profilePicture"
                />
              </Grid>
              {/* location  */}
              <Grid item md={6} xs={12}>
                <PAC_Input
                  label="Location"
                  variant="outlined"
                  size="small"
                  name="location"
                  fullWidth
                />
              </Grid>
              {/* contact  */}
              <Grid item md={6} xs={12}>
                <PAC_Input
                  label="Contact Number"
                  variant="outlined"
                  size="small"
                  name="contactNumber"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button type="submit" disableElevation color="primary" size="small">
              Sign Up
            </Button>
          </PAC_Form>

          <Typography
            align="center"
            color="accent.main"
            fontSize="14px"
            fontWeight={100}
            mt={3}
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
