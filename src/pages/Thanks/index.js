import { Stack, Typography, Button } from "@mui/material";
import SuccessCheckmark from "./successCheckmark";
import { Link } from "react-router-dom";

const Thanks = () => (
  <Stack
    width="100%"
    minHeight={400}
    alignItems="center"
    justifyContent="center"
    textAlign="center"
  >
    <SuccessCheckmark />
    <Stack spacing={-0.5} my={1}>
      <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
        Thank you for shopping with us
      </Typography>
      <Typography sx={{ fontSize: 19, fontWeight: 500 }}>
        We hope you enjoy your new purchase.
      </Typography>
    </Stack>
    <Stack direction="row" spacing={2} my={1.5}>
      <Link to="/">
        <Button variant="contained">Go to Products</Button>
      </Link>
      <Link to="/cart">
        <Button variant="outlined">Go to Cart</Button>
      </Link>
    </Stack>
  </Stack>
);

export default Thanks;
