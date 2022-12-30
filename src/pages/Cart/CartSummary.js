import { ButtonGroup, Typography, Box,Stack, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { items } = useSelector((state) => state.cart);

  const getCartValue = () => {
    return items.reduce((sum, item) => {
      return sum + item.price * item.cartQuantity;
    }, 0);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{ borderBottom: "2px dashed #ddd" }}>
        <Typography>Delivery</Typography>
        <ButtonGroup>
          <Button>Free</Button>
          <Button>Express</Button>
          <Button>1 Day Delivery</Button>
        </ButtonGroup>
        <Typography>Deivery by 1 week from ordered date.</Typography>
      </Box>

      <Box sx={{ borderBottom: "2px dashed #ddd" }}>
        <TextField
          variant="outlined"
          label="Promocode"
          placeholder="Promocode"
        ></TextField>
        <Typography>
          Use code <code>geektrust</code> to get 20% discount.
        </Typography>
      </Box>

      <Box>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Subtotal</Typography>
          <Typography>{getCartValue()}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Discount</Typography>
          <Typography>$0</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Delivery charges</Typography>
          <Typography>$0</Typography>
        </Stack>
      </Box>

      <Box>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Total</Typography>
          <Typography>1000</Typography>
        </Stack>

        <Stack>
          <Button variant='contained'>Place Order</Button>
          <Button variant="outlined">Back to Products</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartSummary;
