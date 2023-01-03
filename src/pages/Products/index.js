import Header from "../../components/Header";
import Filters from "./Filters";
import Products from "./Products";
import { Grid, IconButton, Stack, useMediaQuery } from "@mui/material";
import Search from "../../components/Search";
import { useState } from "react";
import FiltersDialog from "./FiltersDialog";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const isLoadingProducts = useSelector((state) => state.products.isLoading);
  const [isFiltersDialogOpen, setIsFiltersDialogOpen] = useState(false);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const toggleFiltersDialog = () => {
    setIsFiltersDialogOpen((state) => !state);
  };

  return (
    <Grid container>
      {isLoadingProducts && <Loader />}
      <Header />
      {isMediumScreen ? (
        <Grid
          item
          px={{ xs: 1, md: 2 }}
          py={{ xs: 1, md: 2 }}
          md={2.5}
          sx={{
            borderRight: { md: "1px solid #D9D9D9" },
          }}
        >
          <Filters />
        </Grid>
      ) : (
        <Grid
          width={"100%"}
          item
          p={{ xs: 1 }}
          px={{ xs: 1, sm: 2 }}
        >
          <Stack
            direction="row"
            width="100%"
            paddingTop={1}
            alignItems="center"
          >
            <Search />
            <IconButton onClick={toggleFiltersDialog}>
              <ion-icon
                style={{ fontSize: "2rem", color: "#888" }}
                name="filter"
              ></ion-icon>
            </IconButton>
            <FiltersDialog
              isFiltersDialogOpen={isFiltersDialogOpen}
              toggleFiltersDialog={toggleFiltersDialog}
            />
          </Stack>
        </Grid>
      )}

      <Grid
        item
        xs={12}
        md={9.5}
        py={{ xs: 1, md: 2 }}
        px={{ xs: 1, sm: 2, md: 3 }}
      >
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;
