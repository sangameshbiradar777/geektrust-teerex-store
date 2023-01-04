import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../redux/slice/cartSlice";
import { updateProductsQuantity } from "../../redux/slice/productsSlice";

function CartValue({ deliveryType, promocode, cartItemsValue }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleOnOrderPlace = () => {
    dispatch(emptyCart());
    const cartItemsQuantity = cartItems.map((item) => [
      item.id,
      item.cartQuantity,
    ]);
    console.log(cartItemsQuantity);
    dispatch(updateProductsQuantity(cartItemsQuantity));
  };

  const getTotalCartValue = () => {
    let total = cartItemsValue;
    if (deliveryType === "express") total += 70;
    if (promocode === "TREXNEW") total -= cartItemsValue / 20;
    return total;
  };
  return (
    <Stack spacing={1}>
      <Stack spacing={0.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography variant={"h6"}>₹{cartItemsValue}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Discount</Typography>
          <Typography variant={"h6"}>
            ₹{promocode === "TREXNEW" ? cartItemsValue / 20 : 0}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Delivery charges</Typography>
          <Typography variant={"h6"}>
            ₹{deliveryType === "express" ? 70 : 0}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Total</Typography>
          <Typography variant={"h6"}>₹{getTotalCartValue()}</Typography>
        </Stack>
      </Stack>

      <Box>
        <Stack spacing={1}>
          <Link to="/thanks" style={{ width: "100%" }}>
            <Button fullWidth variant="contained" onClick={handleOnOrderPlace}>
              Place Order
            </Button>
          </Link>
          <Link to="/" style={{ width: "100%" }}>
            <Button fullWidth variant="outlined">
              Back to Products
            </Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}

export default CartValue;
