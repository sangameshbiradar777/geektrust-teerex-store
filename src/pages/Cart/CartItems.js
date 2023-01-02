import { Box, Stack } from "@mui/material";
import CartItem from "./CartItem";

const CartItems = ({items}) => {
  return (
    <Box sx={{padding: {xs: 2, md: 2}, width: '100%'}}>

      <Stack spacing={2}>
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </Stack>
    </Box>
  )
}

export default CartItems;