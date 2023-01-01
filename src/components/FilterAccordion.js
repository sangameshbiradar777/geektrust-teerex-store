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
              sx={{ "& .MuiSvgIcon-root": { fontSize: 21 } }}
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
      sx={{ margin: "0 !important" }}
    >
      <AccordionSummary
        expandIcon={<ion-icon style={{fontSize: '1.2rem'}} name="chevron-down-outline"></ion-icon>}
        aria-controls={filterCategory}
        id={filterCategory}
        sx={{
          "& MuiAccordionSummary-content": {
            margin: 0,
          },
          minHeight: "0 !important",
        }}
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
