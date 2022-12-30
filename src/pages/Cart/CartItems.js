import { Typography, Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import useLocalStorage from "../../hooks/useLocalStorage";
import store from "../../redux/store";

const CartItems = () => {
  const {items} = useSelector(state => state.cart);
  const { getItemFromLocalStorage, setItemToLocalStorage } = useLocalStorage('cart');

  store.subscribe(() => {
    const storeCartItems = store.getState().cart;
    setItemToLocalStorage(storeCartItems);
  })

  return (
    <Box>
      <Typography variant="h3" component="h2">Cart</Typography>
      <Stack spacing={2}>
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </Stack>
    </Box>
  )
}

export default CartItems;