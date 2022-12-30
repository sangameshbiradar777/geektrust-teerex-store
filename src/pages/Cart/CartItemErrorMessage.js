import { CardContent, Typography } from "@mui/material";

const CartItemErrorMessage = ({ maxQuantityErrorMessage, minQuantityErrorMessage }) => {
  return (
    <CardContent sx={{color: 'red', py: 0}}>
      { maxQuantityErrorMessage && <Typography>{maxQuantityErrorMessage}</Typography>}
      {minQuantityErrorMessage && <Typography>{minQuantityErrorMessage}</Typography>}
      
    </CardContent>
  );
}

export default CartItemErrorMessage;