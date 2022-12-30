import { Button, Typography, Badge } from "@mui/material";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { items } = useSelector(state => state.cart);
  return (
    <Button
      color='primary'
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        py: 1
      }}
      variant="outlined"
    >
      Your Cart

      <Badge badgeContent={items.length}>
        <ion-icon style={{ fontSize: "1.4rem" }} name="cart-outline"></ion-icon>
      </Badge>
    </Button>
  );
};

export default CartButton;
