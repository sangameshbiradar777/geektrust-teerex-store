import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  IconButton,
  Button, 
  Stack
} from "@mui/material";
import React from 'react';
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../redux/slice/filtersSlice";
import getMinAndMaxPrice from "../../utils/getMinAndMaxPrice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FiltersDialog = ({ isFiltersDialogOpen, toggleFiltersDialog }) => {
  console.log('filter dialog');
  const products = useSelector(state => state.products.allProducts);

  const dispatch = useDispatch();
  const minAndMaxPrice = getMinAndMaxPrice(products);

  const handleOnCancelFilters = () => {
    dispatch(clearFilters(minAndMaxPrice));
    toggleFiltersDialog();
  }

  return (
    <Dialog
      fullScreen
      open={isFiltersDialogOpen}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle sx={{ borderBottom: "1px solid #ddd", marginBottom: 1, py: 1, px: 2 }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: 500, color: "#333" }}
          >
            Filters
          </Typography>
        <IconButton onClick={handleOnCancelFilters}>
          <ion-icon name="close-outline"></ion-icon>
        </IconButton>
        </Stack> 
      </DialogTitle>
      <DialogContent sx={{ width: "100%", px: 3, py: 1 }}>
        <Filters isDialog />
      </DialogContent>
      <DialogActions sx={{ borderTop: "1px solid #ddd" }}>
        <Button variant="contained" onClick={toggleFiltersDialog}>
          Apply
        </Button>
        <Button variant="outlined" onClick={handleOnCancelFilters}>
          Clear Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FiltersDialog;