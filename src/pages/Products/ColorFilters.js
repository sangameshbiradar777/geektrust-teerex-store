import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";
import handleOnFilterChange from "../../utils/handleOnFilterChange";
import useFilterProducts from "../../hooks/useFilterProducts";
import React, { useEffect } from "react";
import FilterAccordion from "../../components/FilterAccordion";

const ColorFilters = () => {
  const { colorFilters } = useSelector((state) => state.filters);
  const filterProducts = useFilterProducts();
  const dispatch = useDispatch();

  const updateCurrentProductsOnFilterChange = () => {
    const filteredProducts = filterProducts();
    dispatch(updateCurrentProducts(filteredProducts));
  };

  useEffect(() => {
    updateCurrentProductsOnFilterChange();
  }, [colorFilters]);

  return (
    <FilterAccordion
      filter={colorFilters}
      filterCategory="Color"
      handleOnFilterChange={handleOnFilterChange}
    />
  );
};

export default React.memo(ColorFilters);
