import { Button, Stack, Typography } from "@mui/material";

const FiltersHeader = ({handleOnClearFilters}) => {
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    marginBottom={1}
  >
    <Typography sx={{ fontSize: 18, px: 0.5, color: "#333" }}>
      Filters
    </Typography>
    <Button onClick={handleOnClearFilters} size="small">
      Clear all
    </Button>
  </Stack>;
}

export default FiltersHeader;