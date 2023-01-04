import { Card, CardMedia, Box } from "@mui/material";
import {
  incrementQunatity,
  decrementQuantity,
  deleteItem,
} from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CartItemCardContent from "./CartItemCardContent";
import CartItemCardActions from "./CartItemCardActions";
import CartItemErrorMessage from "./CartItemErrorMessage";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [maxQuantityErrorMessage, setMaxQuantityErrorMessage] = useState("");
  const [minQuantityErrorMessage, setMinQuantityErrorMessage] = useState("");

  const handleOnIncrementQuantity = () => {
    if (item.quantity === 0) {
      setMaxQuantityErrorMessage(
        `You can order a maximum of ${item.cartQuantity} quantity for this item.`
      );
      setMinQuantityErrorMessage("");
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
      setMaxQuantityErrorMessage("");
    } else {
      setMaxQuantityErrorMessage("");
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleOnDeleteItem = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <CardMedia
        component="img"
        image={item.imageURL}
        alt={item.name}
        sx={{
          width: { xs: "100%", md: "30%" },
          height: 200,
          objectFit: "contain",
          borderBottom: { xs: "1px solid #ddd", md: "none" },
        }}
      />
      <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
        <CartItemCardContent item={item} />
        <CartItemCardActions
          item={item}
          handleOnDecrementQuantity={handleOnDecrementQuantity}
          handleOnIncrementQuantity={handleOnIncrementQuantity}
          handleOnDeleteItem={handleOnDeleteItem}
        />
        <CartItemErrorMessage
          minQuantityErrorMessage={minQuantityErrorMessage}
          maxQuantityErrorMessage={maxQuantityErrorMessage}
        />
      </Box>
    </Card>
  );
};

export default CartItem;
