import Header from "./Header";
import Filters from "./Filters";
import Products from "./Products";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2} fontFamily={"Manrope"}>
      <Header />
      <Grid item xs={3} spacing={3}>
        <Filters />
      </Grid>
      <Grid item xs={9}>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;
