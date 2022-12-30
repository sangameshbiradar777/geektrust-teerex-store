import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterAccordion = ({ filter, filterCategory, handleOnFilterChange, render, isRangeSlider = false }) => {

  const getFilterItems = () => {
    const filterItems = Object.entries(filter).map((filterItem, index) => {
      return (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={filterItem[1]}
              inputProps={{ "data-category": filterCategory }}
              onChange={handleOnFilterChange}
              name={filterItem[0]}
            />
          }
          label={`${filterItem[0].charAt(0).toUpperCase()}${filterItem[0]
            .split("")
            .slice(1)
            .join("")}`}
        />
      );
    });
    return filterItems;
  }
  

  return (
    <Accordion
      defaultExpanded={true}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={filterCategory}
        id={filterCategory}
      >
        <Typography variant="subtitle1">{filterCategory}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>{isRangeSlider ? render() : getFilterItems()}</FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
