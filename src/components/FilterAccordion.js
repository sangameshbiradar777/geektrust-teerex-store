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

const FilterAccordion = ({ filter, setFilters }) => {
  const handleOnChange = (event) => {
    console.dir(event.target.dataset.category)
    
    setFilters(state => {
      const filteredState = state.filter(filterItem => filterItem.name !== event.target.dataset.category);
      console.log(filteredState);
      return state;
    })
  }
console.log(filter)
  const filterItems = filter.items.map((filterItem, index) => (
    <FormControlLabel key={index} control={<Checkbox checked={filterItem.checked} inputProps={{'data-category': filter.name}} onChange={handleOnChange} />} label={filterItem.name} />
  ));


  return (
    <Accordion defaultExpanded={true} elevation={0} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={filter.name}
        id={filter.name}
      >
        <Typography variant="body1" component="h6">
          {filter.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>{filterItems}</FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
