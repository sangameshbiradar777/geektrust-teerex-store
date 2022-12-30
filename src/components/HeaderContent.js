import Search from "./Search";
import { Stack } from "@mui/system";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const HeaderContent = ({isCartPage}) => {
  return (
    <Stack
      direction="row"
      justifyContent={{xs: 'flex-end', md: 'space-between'}}
      md={{justifyContent: 'flex-end'}}
      alignItems="center"
    >
      {isCartPage ? (
        <Link to="/">
          <Button variant="contained"> Products</Button>
        </Link>
      ) : (
        <>
          <Box sx={{ display: { xs: "none", md: "block" }, width: '100%' }}>
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
