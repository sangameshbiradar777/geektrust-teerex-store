import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
  Icon,
  Button,
  Chip,
} from "@mui/material";
import {
  incrementQunatity,
  decrementQuantity,
  deleteItem,
} from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useState } from "react";
import CartItemCardContent from "./CartItemCardContent";
import CartItemCardActions from './CartItemCardActions'
import CartItemErrorMessage from "./CartItemErrorMessage";

const CartItem = ({ item, getTotalCartValue }) => {
  const dispatch = useDispatch();
  const { setItemToLocalStorage } = useLocalStorage();

  const [maxQuantityErrorMessage, setMaxQuantityErrorMessage] = useState("");
  const [minQuantityErrorMessage, setMinQuantityErrorMessage] = useState("");

  const handleOnIncrementQuantity = () => {
    if (item.quantity === 0) {
      setMaxQuantityErrorMessage(
        `You can order a maximum of ${item.cartQuantity} quantity for this item.`
      );
    } else {
      setMinQuantityErrorMessage("");
      dispatch(incrementQunatity(item.id));
    }
  };

  const handleOnDecrementQuantity = () => {
    if (item.cartQuantity === 1) {
      setMinQuantityErrorMessage(
        "You should order minimum 1 quantity for this item"
      );
    } else {
      setMaxQuantityErrorMessage("");
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleOnDeleteItem = () => {
    dispatch(deleteItem(item.id));
  };


  return (
    <Card variant="outlined" elevation={0}>
      <CardMedia
        component="img"
        image={item.imageURL}
        alt={item.name}
        sx={{ width: "30%", height: 200, padding: '1rem' }}
      />
      <Box sx={{ flex: 1 }}>
        <CartItemCardContent item={item} />
        <CartItemCardActions
          item={item}
          handleOnDecrementQuantity={handleOnDecrementQuantity}
          handleOnIncrementQuantity={handleOnIncrementQuantity}
          handleOnDeleteItem={handleOnDeleteItem}
        />
        <CartItemErrorMessage minQuantityErrorMessage={minQuantityErrorMessage} maxQuantityErrorMessage={maxQuantityErrorMessage} />
      </Box>
    </Card>
  );
};

export default CartItem;
