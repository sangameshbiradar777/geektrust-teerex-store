import {
  ButtonGroup,
  Typography,
  Box,
  Stack,
  Button,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeliveryType from "./DeliveryType";
import CartValue from "./CartValue";
import { useMemo } from "react";

const CartSummary = () => {
  const { items } = useSelector((state) => state.cart);
  const [deliveryType, setDeliveryType] = useState("free");
  const [promocode, setPromocode] = useState("");

  const handleOnDeliveryTypeChange = (event) => {
    setDeliveryType(event.target.name);
  };

  const cartItemsValue = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.price * item.cartQuantity;
    }, 0);
  }, [items]);

  return (
    <Box sx={{ width: "100%", p: { xs: 2 }}} >
      <Typography variant="h5" sx={{ paddingBottom: 1, marginBottom: 1, borderBottom: '1px solid #ccc' }}>
        Delivery
      </Typography>
      <Stack spacing={2}>
        <Box>
          <DeliveryType
            deliveryType={deliveryType}
            handleOnDeliveryTypeChange={handleOnDeliveryTypeChange}
          />
        </Box>

        <Box className="dashed-border" />

        <Stack spacing={.3}>
          <Stack direction="row" spacing={2}>
            <OutlinedInput
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              size="small"
              placeholder="promocode"
              sx={{width: '80%'}}
            ></OutlinedInput>
            <Button variant="outlined">Apply</Button>
          </Stack>
          <Typography variant="body2">
            Use code <span style={{ fontWeight: 500 }}>TREXNEW</span> to get 20%
            discount.
          </Typography>
        </Stack>

        <Box className="dashed-border" />

        <CartValue deliveryType={deliveryType} promocode={promocode} cartItemsValue={cartItemsValue} />
      </Stack>
    </Box>
  );
};

export default CartSummary;
