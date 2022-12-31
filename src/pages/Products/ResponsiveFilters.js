import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import React from 'react';
import Filters from "./Filters";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ResponsiveFilters = ({isResponsiveFilterOpen, handleOnResponsiveFilterToggle}) => {
  return (
    <Dialog
      fullScreen
      open={isResponsiveFilterOpen}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle sx={{fontSize: '1.2rem', fontWeight: 500, color: '#333'}}>
        Filters
        <IconButton
          onClick={handleOnResponsiveFilterToggle}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <ion-icon name="close-outline"></ion-icon>
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ width: "100%", padding: 1 }}>
        <Filters />
      </DialogContent>
      <DialogActions sx={{ borderTop: "1px solid #ddd" }}>
        <Button variant="contained" onClick={handleOnResponsiveFilterToggle}>
          Apply
        </Button>
        <Button variant="outlined" onClick={handleOnResponsiveFilterToggle}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResponsiveFilters;