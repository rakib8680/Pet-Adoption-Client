import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUs = () => {
  return (
    <Box className="bg-white px-3" sx={{ pt: { xs: 5, lg: 10 }, pb: 15 }}>
      <Container
        sx={{
          bgcolor: "#F9F9F9",
          padding: { xs: 2, lg: 5 },
          paddingY: { xs: 4 },
          borderRadius: { xs: 3, lg: 5 },
          boxShadow: 1,
        }}
      >
        <Box
          textAlign="center"
          sx={{
            mb: { xs: 7, lg: 12 },
          }}
          className="max-w-5xl mx-auto"
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="secondary.main"
          >
            Contact Us
          </Typography>
          <Typography variant="body1">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you! If you have any questions or concerns,
            please don't hesitate to reach out to us using the form below.
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h3" gutterBottom>
              Reach Us At
            </Typography>
            <div className="border-l-4 border-[#77B5A0] rounded-s-md bg-gradient-to-r from-[#a6d6c6] w-fit p-2">
              <Typography variant="body1" marginLeft={1}>
                <strong>Email:</strong> support@petadoption.com
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                <strong>Phone:</strong> (123) 456-7890
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                <strong>Address:</strong> 123 Pet Street, Pet City, PC 12345
              </Typography>
            </div>
            <Typography variant="body1" mt={4}>
              <strong>Business Hours:</strong>
            </Typography>
            <div className="border-l-4 border-[#77B5A0] rounded-s-md  bg-gradient-to-r from-[#a6d6c6] w-fit p-2">
              <Typography variant="body1" marginLeft={1}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                Saturday: 10:00 AM - 4:00 PM
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                Sunday: Closed
              </Typography>
            </div>
            <Typography variant="body1" mt={4}>
              <strong>Follow Us:</strong>
            </Typography>
            <div className="border-l-4 border-[#77B5A0] rounded-s-md  bg-gradient-to-r from-[#a6d6c6] w-fit p-2">
              <Typography variant="body1" marginLeft={1}>
                <FacebookIcon />{" "}
                <a
                  href="https://facebook.com/petadoption"
                  className="text-secondary"
                >
                  facebook.com/petadoption
                </a>
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                <XIcon />{" "}
                <a
                  href="https://twitter.com/petadoption"
                  className="text-secondary"
                >
                  @petadoption
                </a>
              </Typography>
              <Typography variant="body1" marginLeft={1}>
                <InstagramIcon />{" "}
                <a
                  href="https://instagram.com/petadoption"
                  className="text-secondary"
                >
                  @petadoption
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h3" gutterBottom>
              Send Us a Message
            </Typography>
            {/* form  */}
            <form noValidate autoComplete="off">
              <Box mb={2}>
                <TextField fullWidth label="Name" color="secondary" />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  color="secondary"
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Message"
                  color="secondary"
                  multiline
                  rows={4}
                />
              </Box>
              <Button disableElevation color="secondary" fullWidth>
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
