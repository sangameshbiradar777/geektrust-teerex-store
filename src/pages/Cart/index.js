import Header from "../../components/Header";
import { Grid } from "@mui/material";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Cart = () => {
  return (
    <Grid container>
      <Header isCartPage />
      <Grid container sx={{maxWidth: '75rem', margin: '0 auto'}}>
        <Grid  item xs={12} md={8}>
          <CartItems />
        </Grid>
        <Grid  item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
