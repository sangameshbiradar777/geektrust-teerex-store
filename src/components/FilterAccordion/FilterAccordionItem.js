import { Checkbox, FormControlLabel } from "@mui/material";

const FilterAccordionItem = ({ filterItem, handleOnCheckboxToggle }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={filterItem[1]}
          onChange={handleOnCheckboxToggle}
          name={filterItem[0]}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 21 } }}
        />
      }
      label={filterItem[0]}
    />
  );
};

export default FilterAccordionItem;
