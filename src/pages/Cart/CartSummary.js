import {
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
    <Box p={2}>
      <Box
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: 5,
          padding: {xs: 1, md: 2},
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
            width: "100%",
            p: { xs: 2 },
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500, paddingBottom: 1 }}>
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

            <Stack spacing={0.3}>
              <Stack direction="row" spacing={2}>
                <OutlinedInput
                  value={promocode}
                  onChange={(e) => setPromocode(e.target.value)}
                  size="small"
                  placeholder="promocode"
                  sx={{ flex: 1 }}
                ></OutlinedInput>
                <Button variant="outlined">Apply</Button>
              </Stack>
              <Typography variant="body2">
                Use code <span style={{ fontWeight: 500 }}>TREXNEW</span> to get
                20% discount.
              </Typography>
            </Stack>

            <Box className="dashed-border" />

            <CartValue
              deliveryType={deliveryType}
              promocode={promocode}
              cartItemsValue={cartItemsValue}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSummary;
