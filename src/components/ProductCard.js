import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { incrementQunatity, decrementQuantity } from "../redux/slice/cartSlice";
import ChangeQuantity from "./ChangeQuantity";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartItem = items.find((item) => item.id === product.id);

  if (cartItem) product = cartItem;
  
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
    <Card sx={{ paddingBottom: 1 }}>
      <CardMedia
        sx={{
          height: 180,
          backgroundSize: "contain",
          borderBottom: "1px solid #ccc",
        }}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2">{product.name}</Typography>
          <Typography variant="subtitle1">₹{product.price}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: 10,
                backgroundColor: product.color,
                opacity: 0.5,
              }}
            ></Box>
            <Typography variant="body2">{product.color}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Chip variant="contained" label={product.type} />
            <Chip variant="contained" label={product.gender} />
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
        {product.quantity < 3 && product.quantity !== 0 && (
          <Typography sx={{ color: "#FC7171", fontWeight: 500 }}>
            Hurry! Only {product.quantity} left
          </Typography>
        )}
        {product.quantity === 0 && (
          <Typography sx={{ color: "#FC7171", fontWeight: 500 }}>Out of stock!</Typography>
        )}
        <Box sx={{ marginLeft: "auto" }}>
          {product?.cartQuantity ? (
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
              disabled={product.quantity === 0 ? true : false}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
