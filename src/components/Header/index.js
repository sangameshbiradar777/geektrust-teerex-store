import { Grid } from "@mui/material";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
import React from "react";

const Header = ({ isCartPage }) => {
  console.count("header render");
  return (
    <>
      <Grid
        item
        px={{ xs: 1, sm: 2, md: 3 }}
        py={1.5}
        xs={4}
        md={2.5}
        sx={{
          borderRight: {
            md: isCartPage ? "none" : "1px solid #D9D9D9",
          },
          borderBottom: "1px solid #D9D9D9",
          height: {
            md: 70,
          },
        }}
      >
        <Logo />
      </Grid>
      <Grid
        item
        xs={8}
        md={9.5}
        px={{ xs: 1, sm: 2, md: 3 }}
        py={1.5}
        sx={{ borderBottom: "1px solid #D9D9D9", height: { md: 70 } }}
      >
        <HeaderContent isCartPage={isCartPage} />
      </Grid>
    </>
  );
};

export default React.memo(Header);
