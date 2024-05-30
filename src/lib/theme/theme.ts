import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E5D8B6",
    },
    secondary: {
      main: "#77B5A0",
    },
    accent: {
      main: "#F2994A",
    },
    text: {
      primary: "#101010B2",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
  typography: {
    body1: {
      color: "#101010B2",
    },
    subtitle1: {
      color: "#101010B2",
    },
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

theme.shadows[1] = "0px 2px 10px rgba(0, 0, 0, 0.12)";
