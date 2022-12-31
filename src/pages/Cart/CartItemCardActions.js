import { CardActions, Stack, Chip, IconButton, Button, Typography } from "@mui/material";

const CartItemCardActions = ({ item, handleOnDecrementQuantity, handleOnIncrementQuantity, handleOnDeleteItem }) => {
  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-between", p:2 }}>
      
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ border: "1px solid #ccc", borderRadius: 2,}}

      >
        <IconButton
          onClick={handleOnDecrementQuantity}
          sx={{ fontSize: "1.3rem" }}
        >
          <ion-icon style={{color: '#444'}} name="remove-outline"></ion-icon>
        </IconButton>
        <Typography>{item.cartQuantity}</Typography>
        <IconButton
          onClick={handleOnIncrementQuantity}
          sx={{ fontSize: "1.3rem" }}
        >
          <ion-icon name="add-outline" style={{color: '#444'}}></ion-icon>
        </IconButton>
      </Stack>
      <Button
        onClick={handleOnDeleteItem}
        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
      >
        <ion-icon style={{ fontSize: "1rem", color: '#999' }} name="trash-outline"></ion-icon>
        <Typography variant="body2">Delete</Typography>
      </Button>
    </CardActions>
  );
}

export default CartItemCardActions;