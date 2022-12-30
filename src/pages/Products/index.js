import Header from "../../components/Header";
import Filters from "./Filters";
import Products from "./Products";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={{xs: 5}}>
      <Header />
      <Grid item py={2} md={2} sx={{display: {xs: 'none', md: 'block'}, borderRight: "1px solid #D9D9D9" }}>
        <Filters />
      </Grid>
      <Grid item xs={12} p={2}>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;
