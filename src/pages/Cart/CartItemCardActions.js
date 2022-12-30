import { CardActions, Stack, Chip, IconButton, Button, Typography } from "@mui/material";

const CartItemCardActions = ({ item, handleOnDecrementQuantity, handleOnIncrementQuantity, handleOnDeleteItem }) => {
  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Stack direction="row" spacing={1}>
        <Chip variant="outlined" label={item.type} />
        <Chip variant="outlined" label={item.gender} />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ border: "1px solid #ddd", borderRadius: 2 }}
      >
        <IconButton
          onClick={handleOnDecrementQuantity}
          sx={{ fontSize: "1.3rem" }}
        >
          <ion-icon name="remove-outline"></ion-icon>
        </IconButton>
        <Typography>{item.cartQuantity}</Typography>
        <IconButton
          onClick={handleOnIncrementQuantity}
          sx={{ fontSize: "1.3rem" }}
        >
          <ion-icon name="add-outline"></ion-icon>
        </IconButton>
      </Stack>
      <Button
        onClick={handleOnDeleteItem}
        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
      >
        <ion-icon style={{ fontSize: "1rem" }} name="trash-outline"></ion-icon>
        <Typography variant="body1">Delete</Typography>
      </Button>
    </CardActions>
  );
}

export default CartItemCardActions;