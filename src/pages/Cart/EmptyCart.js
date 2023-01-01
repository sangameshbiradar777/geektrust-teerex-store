import Error from "../../components/Error";
import { Box, Stack, Badge, Typography, Button } from "@mui/material";
import ErrorIcon from "../../components/ErrorIcon";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <Error>
      <Stack spacing={2} alignItems='center' justifyContent='center'>
        <ErrorIcon icon='cart' />
        <Stack textAlign='center'>
          <Typography sx={{fontSize: 26, fontWeight: 600, color: '#777'}}>Your cart is empty</Typography>
          <Typography sx={{fontSize: 18, color: '#888', lineHeight: 1.3}}>Looks like you have not added anything to your cart. Go ahead and add some products to cart.</Typography>
        </Stack>
        <Link to='/'>
          <Button variant="contained" size='large'>Explore products</Button>
        </Link>
      </Stack>
    </Error>
  );
}

export default EmptyCart;
