import { IconButton, Stack, Typography } from "@mui/material";

const ChangeQuantity = ({
  item,
  handleOnDecrementQuantity,
  handleOnIncrementQuantity,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ border: "1px solid #ccc", borderRadius: 2 }}
    >
      <IconButton
        onClick={handleOnDecrementQuantity}
        sx={{ fontSize: "1.3rem" }}
      >
        <ion-icon style={{ color: "#444" }} name="remove-outline"></ion-icon>
      </IconButton>
      <Typography>{item.cartQuantity}</Typography>
      <IconButton
        onClick={handleOnIncrementQuantity}
        sx={{ fontSize: "1.3rem" }}
      >
        <ion-icon name="add-outline" style={{ color: "#444" }}></ion-icon>
      </IconButton>
    </Stack>
  );
};

export default ChangeQuantity;
