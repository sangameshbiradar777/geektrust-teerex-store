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

const FilterAccordion = ({ filter, filterCategory, handleOnFilterChange }) => {

  const filterItems = Object.entries(filter).map((filterItem, index) => {
    return <FormControlLabel
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
        .split("").slice(1)
        .join("")}`}
    />
  });

  return (
    <Accordion defaultExpanded={true} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={filterCategory}
        id={filterCategory}
      >
        <Typography variant="body1" component="h6">
          {filterCategory}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>{filterItems}</FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
