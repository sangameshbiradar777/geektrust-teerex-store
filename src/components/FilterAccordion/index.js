import {
  Accordion,
  AccordionDetails,
  FormGroup,
} from "@mui/material";
import React from "react";
import FilterAccordionItem from "./FilterAccordionItem";
import FilterAccordionSummary from "./FilterAccordionSummary";
import { useDispatch } from "react-redux";

const FilterAccordion = ({
  filter,
  filterCategory,
  handleOnFilterChange,
  render,
  isRangeSlider,
}) => {
  const dispatch = useDispatch();
  const getFilterItems = () => {
    const filterItems = Object.entries(filter).map((filterItem, index) => {
      return (
        <FilterAccordionItem
          key={index}
          filterItem={filterItem}
          handleOnCheckboxToggle={(event) =>
            handleOnFilterChange(event, filter, filterCategory, dispatch)
          }
        />
      );
    });
    return filterItems;
  };

  return (
    <Accordion
      defaultExpanded
      elevation={0}
      sx={{
        margin: "0 !important",
        borderRadius: "16px !important",
        border: "1px solid #ddd",
        py: 1,
      }}
    >
      <FilterAccordionSummary filterCategory={filterCategory} />
      <AccordionDetails>
        <FormGroup>{isRangeSlider ? render() : getFilterItems()}</FormGroup>
      </AccordionDetails>

    </Accordion>
  );
};
export default React.memo(FilterAccordion);
