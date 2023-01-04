import { Box, LinearProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <LinearProgress
        sx={{ backgroundColor: "transparent", height: "2px" }}
        color="primary"
      />
    </Box>
  );
}

export default Loader;
