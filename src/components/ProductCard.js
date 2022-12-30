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


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartItem = items.find((item) => item.id === product.id);

  const handleOnAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <CardMedia
        sx={{
          height: 180,
          backgroundSize: "contain",
          borderBottom: "1px solid #ccc",
      }}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle2">{product.name}</Typography>
        <Stack direction="row" spacing={0.5}>
          <Chip variant="contained" label={product.type} />
          <Chip variant="contained" label={product.gender} />
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: 2, justifyContent: "space-between" }}>
        <Stack>
          <Typography variant="subtitle1">₹{product.price}</Typography>
        </Stack>
        <Button
          onClick={handleOnAddToCart}
          color="primary"
          variant="contained"
          disabled={cartItem?.quantity === 0 ? true : false}
        >
          Add to Cart
        </Button>
      </CardActions>

      {/* <CardContent>
        {cartItem?.quantity < 3 && cartItem?.quantity !== 0 && (
          <Typography>Hurry!, Only {cartItem.quantity} items left.</Typography>
        )}
        {cartItem?.quantity === 0 && <Typography>Out of stock!</Typography>}
      </CardContent> */}
    </Card>
  );
};

export default ProductCard;
