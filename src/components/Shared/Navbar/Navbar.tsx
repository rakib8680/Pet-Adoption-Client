"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  //  use this code to handle hydration error
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );

  const DashboardButton = dynamic(
    () => import("@/components/Ui/DashboardButton/DashboardButton"),
    {ssr: false}
  );

  return (
    <Container>
      <Stack
        direction="row"
        py={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* logo   */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          component={Link}
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

        {/* nav items */}
        <Stack direction="row" gap={4} alignItems='center'>
          <Typography component={Link} href="/" fontSize={15}>
            Home
          </Typography>
          <Typography component={Link} href="/all-pets" fontSize={15}>
            All Pets
          </Typography>
          <Typography component={Link} href="/about" fontSize={15}>
            About
          </Typography>
          <Typography component={Link} href="/blog" fontSize={15}>
            Blog
          </Typography>
          <Typography component={Link} href="/contact" fontSize={15}>
            Contact
          </Typography>

          {/* dashboard button */}
          <DashboardButton />
        </Stack>

        {/* auth buttons  */}
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
