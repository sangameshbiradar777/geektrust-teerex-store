import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Error from "../../components/Error"
import ErrorIcon from "../../components/ErrorIcon";

function NoProductsFound() {
  return (
    <Error>
      <Stack alignItems="center" spacing={1} padding={1}>
        <ErrorIcon icon='search' />
        <Stack spacing={-0.5} textAlign="center">
          <Typography sx={{ fontSize: 35, fontWeight: 600, color: "#888" }}>
            No products found
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 500, color: "#888" }}>
            Try changing selected filters or search text.
          </Typography>
        </Stack>
      </Stack>
    </Error>
  );
}

export default NoProductsFound;