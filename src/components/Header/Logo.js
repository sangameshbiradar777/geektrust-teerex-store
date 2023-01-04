import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Box>
        <Typography color="primary" variant="h2" component="h1">
          TeeRex
        </Typography>
      </Box>
    </Link>
  );
}
 

export default Logo;