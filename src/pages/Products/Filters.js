import { useEffect, useState, useRef } from "react";
import FilterAccordion from "../../components/FilterAccordion";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";
import {
  updateFilters,
  updateFilteredProducts,
} from "../../redux/slice/filtersSlice";
import useFilterProductsByCategory from "../../hooks/useFilterProductsByCategory";
import RangeSlider from "../../components/RangeSlider";

const Filters = () => {
  const DEBOUNCE_TIME = 400;
  const { allProducts } = useSelector((state) => state.products);
  const {
    colorFilters,
    genderFilters,
    typeFilters,
    priceFilters,
    searchText,
    filteredProducts,
  } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const filterProductsByCategory = useFilterProductsByCategory();
  const isUserFilteredProducts = useRef();
  const debounce = useDebounce();

  const getAvailabelFilters = (products, filter) => {
    const filters = [...new Set(products.map((product) => product[filter]))];
    const filtersObject = filters.reduce((object, filter) => {
      return { ...object, [filter]: false };
    }, {});
    return filtersObject;
  };

  useEffect(() => {
    if (!allProducts.length) return;
    const availabeColorFilters = getAvailabelFilters(allProducts, "color");
    const availabeGenderFilters = getAvailabelFilters(allProducts, "gender");
    const availabeTypeFilters = getAvailabelFilters(allProducts, "type");
    const minPrice = Math.min(...allProducts.map((product) => product.price));
    const maxPrice = Math.max(...allProducts.map((product) => product.price));
    dispatch(
      updateFilters({ filters: availabeColorFilters, name: "colorFilters" })
    );
    dispatch(
      updateFilters({ filters: availabeGenderFilters, name: "genderFilters" })
    );
    dispatch(
      updateFilters({ filters: availabeTypeFilters, name: "typeFilters" })
    );
    dispatch(updateFilters({filters: [minPrice, maxPrice], name: 'priceFilters'}))
  }, [allProducts]);

  useEffect(() => {
    if (!isUserFilteredProducts.current) return;
    debounce(() => {
      console.log(priceFilters);
      const filteredProducts = filterProductsByCategory(
        colorFilters,
        genderFilters,
        typeFilters,
        priceFilters,
        searchText,
        allProducts
      );
      dispatch(updateFilteredProducts(filteredProducts));
    }, DEBOUNCE_TIME)
  }, [colorFilters, genderFilters, typeFilters, priceFilters, searchText]);

  useEffect(() => {
    if (!isUserFilteredProducts.current) return;
    dispatch(updateCurrentProducts(filteredProducts));
  }, [filteredProducts]);

  const handleOnColorFilterChange = (event) => {
    const updatedColorFilters = {
      ...colorFilters,
      [event.target.name]: !colorFilters[event.target.name],
    };
    dispatch(
      updateFilters({ filters: updatedColorFilters, name: "colorFilters" })
    );
    isUserFilteredProducts.current = true;
  };

  const handleOnGenderFilterChange = (event) => {
    const updatedGenderFilters = {
      ...genderFilters,
      [event.target.name]: !genderFilters[event.target.name],
    };
    dispatch(
      updateFilters({ filters: updatedGenderFilters, name: "genderFilters" })
    );
    isUserFilteredProducts.current = true;
  };

  const handleOnTypeFilterChange = (event) => {
    const updatedTypeFilters = {
      ...typeFilters,
      [event.target.name]: !typeFilters[event.target.name],
    };
    dispatch(
      updateFilters({ filters: updatedTypeFilters, name: "typeFilters" })
    );
    isUserFilteredProducts.current = true;
  };

  const handleOnPriceFilterChange = (_, value) => {
    dispatch(updateFilters({ filters: value, name: 'priceFilters' }))
    isUserFilteredProducts.current = true;
  };

  return (
    <>
      <FilterAccordion
        filter={colorFilters}
        filterCategory="Color"
        handleOnFilterChange={handleOnColorFilterChange}
      />
      <FilterAccordion
        filter={genderFilters}
        filterCategory="Gender"
        handleOnFilterChange={handleOnGenderFilterChange}
      />
      <FilterAccordion
        filterCategory="Price"
        render={() => (
          <RangeSlider
            value={priceFilters}
            onChange={handleOnPriceFilterChange}
          />
        )}
        isRangeSlider
      />

      <FilterAccordion
        filter={typeFilters}
        filterCategory="Type"
        handleOnFilterChange={handleOnTypeFilterChange}
      />
    </>
  );
};

export default Filters;
