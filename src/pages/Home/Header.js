import { Grid, Box } from "@mui/material";
import Logo from "../../components/Logo";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <>
      <Grid item xs={3}>
        <Logo />
      </Grid>
      <Grid item xs={9}>
        <HeaderContent />
      </Grid>
    </>
  );
};

export default Header;
