import { Box } from "@mui/material";

function Error({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
      }}
    >
      {children}
    </Box>
  );
}

export default Error;
