import { Box,Stack, Button, Typography } from "@mui/material";
import React from "react";

const DeliveryType = ({ deliveryType, handleOnDeliveryTypeChange }) => {
  return (
    <Stack spacing={.3}>
      <Box
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: 2,
          padding: 0.4,
          display: "flex",
          color: "#666",
        }}
      >
        <Button
          color="secondary"
          variant={deliveryType === "free" ? "contained" : "string"}
          onClick={handleOnDeliveryTypeChange}
          name="free"
          sx={{ flex: 1 }}
        >
          Free
        </Button>
        <Button
          color="secondary"
          variant={deliveryType === "express" ? "contained" : "string"}
          onClick={handleOnDeliveryTypeChange}
          name="express"
          sx={{ flex: 1 }}
        >
          Express
        </Button>
      </Box>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
      >
        Delivery by {deliveryType === "free" ? "1 week" : "1 - 2 days"} from
        ordered date.
      </Typography>
    </Stack>
  );
};

export default DeliveryType;
