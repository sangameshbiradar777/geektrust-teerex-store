import { Slider, Box, Stack } from "@mui/material";
import RangeSliderValue from "./RangeSliderValue";

const RangeSlider = ({ value, onChange }) => {
  return (
    <Stack spacing={3} marginTop={1}>
      <Box sx={{ px: 1 }}>
        <Slider
          getAriaLabel={() => "Price Filter"}
          value={value}
          min={250}
          max={500}
          onChange={onChange}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>

      <Stack
        direction="row"
        spacing={2}
        width="100%"
        justifyContent="space-between"
      >
        <RangeSliderValue
          value={value[0]}
          handleOnRangeSlide={(event) =>
            onChange(event, parseInt(event.target.value), value[1])
          }
        />
        <RangeSliderValue
          value={value[1]}
          handleOnRangeSlide={(event) =>
            onChange(event, value[0], parseInt(event.target.value))
          }
        />
      </Stack>
    </Stack>
  );
};

export default RangeSlider;
