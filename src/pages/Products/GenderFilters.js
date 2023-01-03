import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";
import handleOnFilterChange from "../../utils/handleOnFilterChange";
import useFilterProducts from "../../hooks/useFilterProducts";
import React, { useEffect } from "react";
import FilterAccordion from "../../components/FilterAccordion";


const GenderFilters = () => {
  const { genderFilters } = useSelector((state) => state.filters);
  const filterProducts = useFilterProducts();
  const dispatch = useDispatch();
  console.log("gender filters");

  const updateCurrentProductsOnFilterChange = () => {
    const filteredProducts = filterProducts();
    dispatch(updateCurrentProducts(filteredProducts));
  };

  useEffect(() => {
    updateCurrentProductsOnFilterChange();
  }, [genderFilters]);

  return (
    <FilterAccordion
      filter={genderFilters}
      filterCategory="Gender"
      handleOnFilterChange={handleOnFilterChange}
    />
  );
};

export default React.memo(GenderFilters);
