import { Card, CardMedia } from "@mui/material";
import React from "react";
import ProductCardActions from "./ProductCardActions";
import ProductCardContent from "./ProductCardContent";

const ProductCard = ({ product, cartItem }) => {
  if (cartItem) product = cartItem;

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
      <ProductCardContent product={product} />
      <ProductCardActions product={product} />
    </Card>
  );
};

export default React.memo(ProductCard);
