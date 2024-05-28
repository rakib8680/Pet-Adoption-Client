
'use client'

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const Navbar = () => {

  const userInfo = getUserInfo();


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
        <Stack direction="row" gap={4}>
          <Typography component={Link} href="/" fontSize={15}>
            Home
          </Typography>
          <Typography component={Link} href="/about" fontSize={15}>
            About
          </Typography>
          <Typography component={Link} href="/blog" fontSize={15}>
            Blog
          </Typography>
          <Typography component={Link} href="/adoption" fontSize={15}>
            Adopt
          </Typography>
          <Typography component={Link} href="/gallery" fontSize={15}>
            Gallery
          </Typography>
          <Typography component={Link} href="/faq" fontSize={15}>
            FAQ
          </Typography>
          <Typography component={Link} href="/contact" fontSize={15}>
            Contact
          </Typography>
        </Stack>



        {/* auth buttons  */}
        <Stack gap={1} direction="row">
          <Button
            disableElevation
            color="secondary"
            component={Link}
            href="/login"
          >
            Login
          </Button>
          <Button
            disableElevation
            color="primary"
            component={Link}
            href="/register"
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
