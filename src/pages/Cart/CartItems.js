import { Typography, Box, Stack } from "@mui/material";
import CartItem from "./CartItem";
import useLocalStorage from "../../hooks/useLocalStorage";
import store from "../../redux/store";

const CartItems = ({items}) => {

  const { getItemFromLocalStorage, setItemToLocalStorage } = useLocalStorage('cart');

  store.subscribe(() => {
    const storeCartItems = store.getState().cart;
    setItemToLocalStorage(storeCartItems);
  })

  return (
    <Box sx={{padding: {xs: 2, md: 2}, width: '100%'}}>
      <Typography variant="h5" sx={{marginBottom: 1}}>Shopping Cart</Typography>
      <Stack spacing={2}>
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </Stack>
    </Box>
  )
}

export default CartItems;