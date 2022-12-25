import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Button,
  Chip
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Chip variant='contained' label={product.type} />
        <Chip variant='contained' label={product.gender} />
      </CardContent>
      <CardActions>
        <Typography>Price</Typography>
        <Typography>Rs {product.price}</Typography>
        <Button color="primary" variant="contained">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
