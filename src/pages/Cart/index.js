import Header from "../../components/Header";
import { Grid } from "@mui/material";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <Grid container>
      <Header isCartPage />
      {items.length ? (
        <Grid container sx={{ maxWidth: "75rem", margin: "0 auto" }}>
          <Grid item xs={12} md={8}>
            <CartItems items={items} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CartSummary />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </Grid>
  );
};

export default Cart;
