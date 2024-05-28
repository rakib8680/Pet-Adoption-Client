"use client";

import Lottie from "lottie-react";
import login_animation2 from "@/assets/login_animation2.json";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "@/services/actions/loginUser";

export type TLoginInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>();

  // Login user function
  const onSubmit: SubmitHandler<TLoginInputs> = async (data) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      if (res.success) {
        toast.success(res.message, { duration: 3000 });
        // router.push("/login");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="
    h-screen bg-gradient-to-br from-[#fffded] to-[#fff4f4] "
    >
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

      <div
        className=" container  mx-auto flex justify-center items-center h-[80vh] gap-60
      "
      >
        <Lottie
          animationData={login_animation2}
          loop={true}
          className="w-[450px]"
        />

        <Box
          sx={{
            padding: "50px",
            borderRadius: "10px",
            bgcolor: "#fff",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: "350px",
              marginRight: "100px",
              margin: "0 auto",
            }}
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
            />
            <Typography
              variant="h4"
              color="primary"
              align="center"
              fontWeight="600"
              fontSize="30px"
              className="font-bold"
            >
              Sign In
            </Typography>
            <Divider
              sx={{
                bgcolor: "primary.main",
                height: "2px",
                marginBottom: "20px",
              }}
            />

            {/* Login form  */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* email  */}
              <TextField
                label="Enter your email"
                variant="outlined"
                fullWidth
                {...register("email")}
              />

              {/* password  */}
              <Box sx={{ position: "relative" }}>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  {...register("password")}
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
                href="/change-password"
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
            </form>

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
