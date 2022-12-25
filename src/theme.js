import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Archivo", "Manrope", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#2C00D4",
    },
  },
});

export default theme;
