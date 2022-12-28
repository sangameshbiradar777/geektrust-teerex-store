import Search from "./Search";
import { Stack } from "@mui/system";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const HeaderContent = ({isCartPage}) => {
  return (
    <Stack
      direction="row"
      justifyContent={isCartPage ? "flex-end" : "space-between"}
      alignItems="center"
      fontFamily="Manrope"
    >
      {isCartPage ? (
        <Link to="/">
          <Button variant="contained"> Products</Button>
        </Link>
      ) : (
        <>
          <Search />
          <Link to="/cart">
            <CartButton />
          </Link>
        </>
      )}
    </Stack>
  );
};

export default HeaderContent;
