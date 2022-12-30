import Header from "../../components/Header";
import { Grid } from "@mui/material";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Cart = () => {
  return (
    <Grid container>
      <Header isCartPage />
      <Grid container>
        <CartItems />
        <CartSummary />
      </Grid>
    </Grid>
  )
}

export default Cart;