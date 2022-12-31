import { CardContent, Typography } from "@mui/material";

const CartItemErrorMessage = ({ maxQuantityErrorMessage, minQuantityErrorMessage }) => {
  return (
    <CardContent sx={{ py: 1, textAlign: 'center' }}>
      {maxQuantityErrorMessage && (
        <Typography sx={{ color: "#E67375", lineHeight: 1.1 }}>
          {maxQuantityErrorMessage}
        </Typography>
      )}
      {minQuantityErrorMessage && (
        <Typography sx={{ color: "#E67375", lineHeight: 1.1, }}>
          {minQuantityErrorMessage}
        </Typography>
      )}
    </CardContent>
  );
}

export default CartItemErrorMessage;