import { Stack } from "@mui/material";
import { useState } from "react";
import FilterAccordion from "../../components/FilterAccordion";

const Filters = () => {
  const [colorFilters, setColorFilters] = useState([
    { name: "Red" },
    { name: "Blue" },
    { name: "Green" },
  ].map(filter => ({...filter, checked: false})));
  const initialFilterState = [
    {
      name: "Color",
      items: [{ name: "Red" }, { name: "Blue" }, { name: "Green" }],
    },
    {
      name: "Gender",
      items: [{ name: "Men" }, { name: "Women" }],
    },
    {
      name: "Price",
      items: [
        { name: "₹0-₹250" },
        { name: "₹251-₹450" },
        { name: "Above ₹450" },
      ],
    },
    {
      name: "Type",
      items: [{ name: "Polo" }, { name: "Hoodie" }, { name: "Basic" }],
    },
  ].map((filter) => ({...filter, items: filter.items.map(item => ({...item, checked: false}))}));

  const [filters, setFilters] = useState(initialFilterState);

  return (
    <>
      {filters.map((filter, index) => (
        <FilterAccordion key={index} filter={filter} setFilters={setFilters} />
      ))}
    </>
  );
};

export default Filters;
