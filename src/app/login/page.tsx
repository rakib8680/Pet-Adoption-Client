"use client";

import Lottie from "lottie-react";
import login_animation2 from "@/assets/login_animation2.json";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "@/services/actions/loginUser";
import { storeAccessToken } from "@/services/auth.service";
import PAC_Form from "@/components/Forms/PAC_Form";
import PAC_Input from "@/components/Forms/PAC_Input";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/utils/formValidation";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();



  // Login user function
  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        storeAccessToken(res?.data?.token);
        toast.success(res.message, { duration: 3000 });
        router.push("/");
      } else {
        setError(res.message);
        console.log(error);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };


  return (

    <div
      className="lg:h-screen bg-gradient-to-br from-[#fffded] to-[#fff4f4]">

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

      <div className="container  mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:h-[80vh] gap-20 lg:gap-60 px-5 lg:px-0">

        {/* Animation  */}
        <Lottie
          animationData={login_animation2}
          loop={true}
          className="md:w-[450px] px-8 lg:px-0 pb-10 lg:pb-0"
        />

        {/* Form  */}
        <Box
          sx={{
            padding: { xs: "30px", lg: "50px" },
            borderRadius: "10px",
            bgcolor: "#fff",
            marginTop: { xs: "50px", lg: "0px" },
            maxWidth: "450px",
            width: "100%",
          }}
        >
          <Stack
            spacing={2}
          >
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
              className="hidden md:block"
            />
            <Typography
              variant="h4"
              color="primary"
              align="center"
              fontWeight="600"
              fontSize="30px"
              className="font-bold"
            >
              Login Here
            </Typography>
            <Divider
              sx={{
                bgcolor: "primary.main",
                height: "2px",
                marginBottom: "20px",
              }}
            />

            <Box>
              {error && (
                <Typography
                  color="accent.main"
                  sx={{ fontSize: 15, fontWeight: 400 }}
                >
                  {error}
                </Typography>
              )}
            </Box>

            {/* Login form  *********************************************************/}
            <PAC_Form
              onSubmit={handleLogin}
              resolver={zodResolver(loginValidationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              {/* email  */}
              <PAC_Input
                name="email"
                label="Enter your email"
                variant="outlined"
                fullWidth
              />

              {/* password  */}
              <Box sx={{ position: "relative" }}>
                <PAC_Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  name="password"
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: 15,
                    top: 15,
                    cursor: "pointer",
                    color: "accent.main",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Box>
              </Box>
              <Typography
                fontSize={12}
                component={Link}
                href="/forgot-password"
                sx={{
                  ":hover": {
                    textDecoration: "underline",
                  },
                  display: "block",
                }}
              >
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                disableElevation
                color="primary"
                sx={{ mb: 2, mt: 1 }}
              >
                Login
              </Button>
            </PAC_Form>

            {/* sign-up link  */}
            <Typography
              align="center"
              color="accent.main"
              fontSize="14px"
              fontWeight={100}
            >
              Don&apos;t have an account?{" "}
              <Box
                color="secondary.main"
                component={Link}
                href="/register"
                className="hover:underline"
              >
                SignUp
              </Box>
            </Typography>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
