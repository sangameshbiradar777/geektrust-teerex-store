import { Box, Stack, CardContent, Chip, Typography } from "@mui/material";
import React from "react";

const ProductCardContent = ({product}) => {
  return (
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
  );
};

export default ProductCardContent;
