import { Slider, Box } from "@mui/material";
import { useState } from "react";

const RangeSlider = ({value,  onChange }) => {
  return (
    <Box sx={{marginTop: 5, paddingLeft: 2, paddingRight: 2}}>
      <Slider
        getAriaLabel={() => "Price Filter"}
        value={value}
        min={250}
        max={500}
        onChange={onChange}
        valueLabelDisplay="on"
        disableSwap
      />
    </Box>
  );
};

export default RangeSlider;
