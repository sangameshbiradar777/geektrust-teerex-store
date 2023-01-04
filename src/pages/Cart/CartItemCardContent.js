import { Box, CardContent, Stack, Typography } from "@mui/material";

const CartItemCardContent = ({ item }) => {
  const getTotalItemPrice = () => item.price * item.cartQuantity;

  return (
    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Typography variant="caption">{item.name}</Typography>
        <Typography variant="subtitle1" component="span">
          ₹{getTotalItemPrice()}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>₹{item.price}</Typography>
        <Box sx={{ width: ".5px", height: "15px", backgroundColor: "#999" }} />
        <Typography>In Stock</Typography>
      </Stack>
    </CardContent>
  );
};

export default CartItemCardContent;
