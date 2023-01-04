import { InputAdornment, TextField } from "@mui/material";

const RangeSliderValue = ({value, handleOnRangeSlide}) => {
  return (
    <TextField
      value={value || 0}
      onChange={handleOnRangeSlide}
      label="Min"
      size="small"
      InputProps={{
        readOnly: true,
        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
      }}
    />
  );
}

export default RangeSliderValue;