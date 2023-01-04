import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";
import handleOnFilterChange from "../../utils/handleOnFilterChange";
import useFilterProducts from "../../hooks/useFilterProducts";
import React, { useEffect } from "react";
import FilterAccordion from "../../components/FilterAccordion";


const TypeFilters = () => {
  const { typeFilters } = useSelector((state) => state.filters);
  const filterProducts = useFilterProducts();
  const dispatch = useDispatch();
  console.log("type filters");

  const updateCurrentProductsOnFilterChange = () => {
    const filteredProducts = filterProducts();
    dispatch(updateCurrentProducts(filteredProducts));
  };

  useEffect(() => {
    updateCurrentProductsOnFilterChange();
  }, [typeFilters]);

  return (
    <FilterAccordion
      filter={typeFilters}
      filterCategory="Type"
      handleOnFilterChange={handleOnFilterChange}
    />
  );
};

export default React.memo(TypeFilters);
