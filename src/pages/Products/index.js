import Header from "../../components/Header";
import Filters from "./Filters";
import Products from "./Products";
import { Grid, IconButton, Stack } from "@mui/material";
import Search from "../../components/Search";
import { useState } from "react";
import ResponsiveFilters from "./ResponsiveFilters";

const Home = () => {
  const [isResponsiveFilterOpen, setIsResponsiveFilterOpen] = useState(false);

  const handleOnResponsiveFilterToggle = () => {
    setIsResponsiveFilterOpen((state) => !state);
  };

  return (
    <Grid container>
      <Header />
      <Grid
        item
        py={{ xs: 1, md: 2 }}
        md={2}
        sx={{
          display: { xs: "none", md: "block" },
          borderRight: { md: "1px solid #D9D9D9", },
        }}
      >
        <Filters />
      </Grid>
      <Grid width={"100%"} item p={{ xs: 1 }} sx={{ display: { md: "none" } }}>
        <Stack direction="row" width="100%">
          <Search />
          <IconButton onClick={handleOnResponsiveFilterToggle}>
            <ion-icon name="filter"></ion-icon>
          </IconButton>
          <ResponsiveFilters
            isResponsiveFilterOpen={isResponsiveFilterOpen}
            handleOnResponsiveFilterToggle={handleOnResponsiveFilterToggle}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={10} p={{ xs: 1, md: 2 }}>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;
