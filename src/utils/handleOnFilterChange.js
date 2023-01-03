import { updateFilters } from "../redux/slice/filtersSlice";

const handleOnFilterChange = (event, filters, filterCategory, dispatch) => {
  const updatedFilters = {
    ...filters,
    [event.target.name]: !filters[event.target.name],
  };
  const filterName = filterCategory.toLowerCase().concat("Filters");

  dispatch(updateFilters({ filters: updatedFilters, name: filterName }));
};


export default handleOnFilterChange;