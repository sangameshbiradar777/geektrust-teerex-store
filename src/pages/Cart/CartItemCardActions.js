import {
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import ChangeQuantity from "../../components/ChangeQuantity";

const CartItemCardActions = ({
  item,
  handleOnDecrementQuantity,
  handleOnIncrementQuantity,
  handleOnDeleteItem,
}) => {
  return (
    <CardActions
      sx={{ display: "flex", justifyContent: "space-between", px: 2, py: 1}}
    >
      <ChangeQuantity
        item={item}
        handleOnDecrementQuantity={handleOnDecrementQuantity}
        handleOnIncrementQuantity={handleOnIncrementQuantity}
      />
      <Button
        onClick={handleOnDeleteItem}
        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
      >
        <ion-icon
          style={{ fontSize: "1rem", color: "#999" }}
          name="trash-outline"
        ></ion-icon>
        <Typography variant="body2">Delete</Typography>
      </Button>
    </CardActions>
  );
};

export default CartItemCardActions;
