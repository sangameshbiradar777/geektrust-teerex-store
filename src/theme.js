import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
        raised: false,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "2px solid #E8E8E8",
          borderRadius: 15,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          minHeight: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: ["Inter Tight", "sans-serif"].join(","),
    h1: {
      fontSize: 40,
      color: "#2A2A2A",
    },
    h2: {
      fontSize: 30,
      color: "#303030",
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
      color: "#444",
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      color: "#444",
    },
    subtitle1: {
      fontSize: 18,
      color: "#303030",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 17,
      color: "#444",
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      color: "#525252",
    },
    body2: {
      fontSize: 15,
      color: "#737373",
    },
    caption: {
      fontSize: 19,
      color: "#444",
    },
  },
  palette: {
    primary: {
      // main: "#2874F0",
      main: "#5333ed",
      contrastText: "#E8E8E8",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#444",
    },
    textDark1: {
      main: "#2A2A2A",
    },
    textDark2: {
      main: "#303030",
    },
    textGrey1: {
      main: "#626262",
    },
    textGrey2: {
      main: "#737373",
    },
    textGrey3: {
      main: "#969696",
    },
    textGrey4: {
      main: "#E9E9E9",
    },
    bgGrey1: {
      main: "#F7F7F7",
    },
    bgGrey2: {
      main: "#E8E8E8",
    },
    warning: {
      main: "#E67375",
    },
  },
});

export default theme;
