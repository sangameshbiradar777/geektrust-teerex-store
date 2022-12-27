import { Grid, Box } from "@mui/material";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";

const Header = ({isCartPage}) => {
  return (
    <>
      <Grid item xs={3}>
        <Logo />
      </Grid>
      <Grid item xs={9}>
        <HeaderContent isCartPage={isCartPage} />
      </Grid>
    </>
  );
};

export default Header;
