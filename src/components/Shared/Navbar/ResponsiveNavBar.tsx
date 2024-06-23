"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Stack } from "@mui/material";
import logo2 from "@/assets/logo2.png";

const drawerWidth = 240;

const ResponsiveNavBar = () => {
  //  use this code to handle hydration error
  const AuthButton = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );

  const DashboardButton = dynamic(
    () => import("@/components/Ui/DashboardButton/DashboardButton"),
    { ssr: false }
  );


  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* logo   */}
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={2}
        component={Link}
        href="/"
        sx={{
          padding: "30px 0",
        }}
        className="bg-gradient-to-b from-[#F5F5F5] to-[#ffffff]"
      >
        <Image
          src={logo2}
          alt="logo"
          quality={100}
          width={50}
          className="rounded-full"
        />
        <Typography
          fontWeight={600}
          sx={{
            fontSize: 18,
          }}
        >
          <Box component="span" color="accent.main" className="font-black ">
            Pet
          </Box>{" "}
          Adoption Center 🐾
        </Typography>
      </Stack>
      <div
        className="h-screen bg-[#F5F5F5] !pt-10   
       bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#c0c0c0]
      "
      >
        {/* nav items */}
        <Stack gap={4} alignItems="center" pb={5}>
          <Typography component={Link} href="/" fontSize={15}>
            Home
          </Typography>
          <Typography component={Link} href="/all-pets" fontSize={15}>
            All Pets
          </Typography>
          <Typography component={Link} href="/about" fontSize={15}>
            About
          </Typography>
          <Typography component={Link} href="/contact" fontSize={15}>
            Contact
          </Typography>

          {/* dashboard button */}
          <DashboardButton />
        </Stack>
        <AuthButton />
      </div>
    </Box>
  );



  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="static"
        className="!md:flex !flex-row py-10  items-center justify-between"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

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
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { xs: 20, md: 23 },
            }}
          >
            <Box component="span" color="accent.main" className="font-black ">
              Pet
            </Box>{" "}
            Adoption Center 🐾
          </Typography>
        </Stack>

        {/* nav items */}
        <Stack
          direction="row"
          gap={4}
          alignItems="center"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Typography component={Link} href="/" fontSize={15}>
            Home
          </Typography>
          <Typography component={Link} href="/all-pets" fontSize={15}>
            All Pets
          </Typography>
          <Typography component={Link} href="/about" fontSize={15}>
            About
          </Typography>
          <Typography component={Link} href="/contact" fontSize={15}>
            Contact
          </Typography>

          {/* dashboard button */}
          <DashboardButton />
        </Stack>

        {/* auth buttons  */}
        <div className="hidden md:block">
          <AuthButton />
        </div>
      </AppBar>

      {/* mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Container>
  );
};

export default ResponsiveNavBar;
