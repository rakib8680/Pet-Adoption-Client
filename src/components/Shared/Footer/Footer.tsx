import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";

const Footer = () => {
  return (
    <Box className="bg-gray-800 text-gray-200 py-10 pt-20">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Image
              src={logo2}
              alt="Pet Adoption Center Logo"
              width={130}
              className="rounded-full bg-slate-200 p-1  mb-2"
            />
            <Typography fontWeight={600} fontSize={23} color="primary">
              <Box component="span" color="accent.main" className="font-black ">
                Pet
              </Box>{" "}
              Adoption Center 🐾
            </Typography>
            <Typography variant="body2" className="mt-2">
              Helping pets find their forever homes since 2021.
            </Typography>
            <Box className="mt-4">
              <Facebook className="mr-2 cursor-pointer" />
              <Twitter className="mr-2 cursor-pointer" />
              <Instagram className="cursor-pointer" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold">
              Quick Links
            </Typography>

            <Stack spacing={10} direction="row" className="mt-2">
              <Stack spacing={2}>
                <Typography
                  component={Link}
                  href="/"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  href="/about"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  About
                </Typography>
                <Typography
                  component={Link}
                  href="/blog"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Blog
                </Typography>
                <Typography
                  component={Link}
                  href="/all-pets"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  All Pets
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography
                  component={Link}
                  href="/gallery"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Gallery
                </Typography>
                <Typography
                  component={Link}
                  href="/faq"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  FAQ
                </Typography>
                <Typography
                  component={Link}
                  href="/testimonials"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Testimonials
                </Typography>
                <Typography
                  component={Link}
                  href="/contact"
                  variant="body2"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Contact
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold">
              Subscribe to our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 5, mt: 1 }}>
              Get updates on new pets available for adoption.
            </Typography>
            <Box className="flex space-x-2">
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                fullWidth
                className="bg-white rounded"
              />
              <Button variant="contained" color="primary" size="small">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box className="mt-10 text-center">
          <Typography variant="body2" className="text-gray-500">
            &copy; {new Date().getFullYear()} Pet Adoption Center. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
