import Search from "./Search";
import { Stack } from "@mui/system";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const HeaderContent = ({isCartPage}) => {
  return (
    <Stack
      direction="row"
      justifyContent={{ xs: "flex-end", md: "space-between" }}
      alignItems="center"
    >
      {isCartPage ? (
        <Link to="/" style={{marginLeft: 'auto'}}>
          <Button variant="outlined" sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <ion-icon style={{fontSize: '1.1rem'}} name="arrow-back"></ion-icon>
            Products
          </Button>
        </Link>
      ) : (
        <>
          <Box sx={{ display: { xs: "none", md: "block" }, flex: 1 }}>
            <Search />
          </Box>
          <Link to="/cart">
            <CartButton />
          </Link>
        </>
      )}
    </Stack>
  );
};

export default HeaderContent;
