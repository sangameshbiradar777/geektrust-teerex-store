import Header from "../../components/Header";
import { Grid, Typography } from "@mui/material";
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
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 600,
                color: "#444",
                px: 2,
                paddingTop: 2,
                paddingBottom: 1,
                borderBottom: '1px solid #ddd'
              }}
            >
              Shopping Cart
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ borderRight: { md: "1px solid #ddd" } }}
          >
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
