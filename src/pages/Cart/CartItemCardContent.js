import { Box, CardContent, Stack, Typography } from "@mui/material";

const CartItemCardContent = ({ item }) => {
  const getTotalItemPrice = () => item.price * item.cartQuantity;
  return (
    <CardContent>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="h5" component="span">
          ₹ {getTotalItemPrice()}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>₹ {item.price}</Typography>
        <Box sx={{ width: ".5px", height: "15px", backgroundColor: "#999" }} />
        <Typography>In Stock</Typography>
      </Stack>
    </CardContent>
  );
}

export default CartItemCardContent;