import { Box, Button, CardActions, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { incrementQunatity, decrementQuantity, addToCart } from "../redux/slice/cartSlice";
import ChangeQuantity from "./ChangeQuantity";

const ProductCardActions = ({ product }) => {
  const FEWER_PRODUCTS = 3;
  const dispatch = useDispatch();

  const handleOnAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleOnIncrementQuantity = () => {
    if (!product.quantity) {
      return;
    }
    dispatch(incrementQunatity(product.id));
  };

  const handleOnDecrementQuantity = () => {
    if (!product.cartQuantity) {
      return;
    }
    dispatch(decrementQuantity(product.id));
  };

  return (
    <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
      {product.quantity < FEWER_PRODUCTS && !!product.quantity && (
        <Typography sx={{ color: "#FC7171", fontWeight: 500 }}>
          Hurry! Only {product.quantity} left
        </Typography>
      )}
      {!product.quantity && (
        <Typography sx={{ color: "#FC7171", fontWeight: 500 }}>
          Out of stock!
        </Typography>
      )}
      <Box sx={{ marginLeft: "auto" }}>
        {product.cartQuantity ? (
          <ChangeQuantity
            item={product}
            handleOnDecrementQuantity={handleOnDecrementQuantity}
            handleOnIncrementQuantity={handleOnIncrementQuantity}
          />
        ) : (
          <Button
            onClick={handleOnAddToCart}
            color="primary"
            variant="contained"
            disabled={!product.quantity ? true : false}
          >
            Add to Cart
          </Button>
        )}
      </Box>
    </CardActions>
  );
};

export default ProductCardActions;
