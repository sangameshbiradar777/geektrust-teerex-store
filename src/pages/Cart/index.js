import Header from "../../components/Header";
import { Grid } from "@mui/material";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <Grid container>
      <Header isCartPage />
      <Grid container>
        <CartItems />
      </Grid>
    </Grid>
  )
}

export default Cart;