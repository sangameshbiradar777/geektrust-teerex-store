import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Error from "../../components/Error"

function NoProductsFound() {
  return (
    <Error>
      <Stack alignItems="center" spacing={1}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 150,
            width: 150,
            borderRadius: 6,
            backgroundColor: "#E8E8E8",
          }}
        >
          <ion-icon
            style={{ height: 100, width: 100, color: "#777" }}
            name="search-outline"
          ></ion-icon>
        </Stack>
        <Stack spacing={-1} alignItems='center'>
          <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#888" }}>
            No products found.
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 500, color: "#888" }}>
            We coundn't find any products. Try changing selected filters or
            search text.
          </Typography>
        </Stack>
      </Stack>
    </Error>
  );
}

export default NoProductsFound;