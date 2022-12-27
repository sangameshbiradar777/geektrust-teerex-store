import {
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

  // console.log(items);

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Chip variant="contained" label={product.type} />
        <Chip variant="contained" label={product.gender} />
      </CardContent>
      <CardActions>
        <Typography>Price</Typography>
        <Typography>Rs {product.price}</Typography>
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
