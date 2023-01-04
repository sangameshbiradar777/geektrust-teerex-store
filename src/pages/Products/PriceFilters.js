import { useSelector, useDispatch } from "react-redux";
import RangeSlider from "../../components/RangeSlider";
import { DEBOUNCE_TIME } from "../../config/config";
import useDebounce from "../../hooks/useDebounce";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";
import useFilterProducts from "../../hooks/useFilterProducts";
import React, { useEffect } from "react";
import FilterAccordion from "../../components/FilterAccordion";
import { updateFilters } from "../../redux/slice/filtersSlice";

const PriceFilters = () => {
  const { priceFilters } = useSelector((state) => state.filters);
  const filterProducts = useFilterProducts();
  const dispatch = useDispatch();
  const debounce = useDebounce();

  console.log("price filters");

  const updateCurrentProductsOnFilterChange = () => {
    const filteredProducts = filterProducts();
    dispatch(updateCurrentProducts(filteredProducts));
  };

  useEffect(() => {
    debounce(updateCurrentProductsOnFilterChange, DEBOUNCE_TIME);
  }, [priceFilters]);

  const handleOnPriceFilterChange = (_, value) => {
    dispatch(updateFilters({ filters: value, name: "priceFilters" }));
  };

  return (
    <FilterAccordion
      filterCategory="Price"
      filter={priceFilters}
      isRangeSlider
      handleOnFilterChange={handleOnPriceFilterChange}
      render={() => (
        <RangeSlider
          value={priceFilters}
          onChange={handleOnPriceFilterChange}
        />
      )}
    />
  );
};

export default React.memo(PriceFilters);
