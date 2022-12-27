import { Button, Typography, Badge } from "@mui/material";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { items } = useSelector(state => state.cart);
  return (
    <Button
      sx={{
        fontSize: "body1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
      variant="contained"
    >
      <Typography component="p">Your Cart</Typography>

      <Badge badgeContent={items.length}>
        <ion-icon style={{ fontSize: "1.4rem" }} name="cart-outline"></ion-icon>
      </Badge>
    </Button>
  );
};

export default CartButton;
