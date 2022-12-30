import { Grid, Box } from "@mui/material";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
import Search from "./Search";

const Header = ({isCartPage}) => {
  return (
    <>
      <Grid
        item
        p={2}
        xs={2}    
        sx={{
          borderRight: "1px solid #D9D9D9",
          borderBottom: "1px solid #D9D9D9",
          height: 80,
        }}
      >
        <Logo />
      </Grid>
      <Grid item xs={10} p={2} sx={{ borderBottom: "1px solid #D9D9D9", height: 80}}>
        <HeaderContent isCartPage={isCartPage} />
        <Box sx={{display: {md: 'none'}}} >
         <Search />
        </Box>
      </Grid>
    </>
  );
};

export default Header;
