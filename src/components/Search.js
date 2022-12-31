import { Box, OutlinedInput } from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts } from "../redux/slice/productsSlice";
import {
  updateSearchProducts,
  updateSearchText,
} from "../redux/slice/filtersSlice";
import useFilterProductsBySearch from "../hooks/useFilterProductsBySearch";
import useFilterProductsByCategory from "../hooks/useFilterProductsByCategory";

const Search = () => {
  const DEBOUNCE_TIME = 400; // IN MILLI_SECONDS
  const {
    searchProducts,
    filteredProducts,
    colorFilters,
    genderFilters,
    typeFilters,
    priceFilters,
    searchText,
  } = useSelector((state) => state.filters);
  const timerId = useRef(null);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const filterProductsBySearch = useFilterProductsBySearch();
  const filterProductsByCategory = useFilterProductsByCategory();
  const isUserSearched = useRef(false);

  const updateProducts = () => {
    let currentProducts = filteredProducts.length
      ? filteredProducts
      : allProducts;

    console.log(currentProducts, "filtered---------");
    currentProducts = filterProductsBySearch(currentProducts, searchText);
    dispatch(updateSearchProducts(currentProducts));
  };

  useEffect(() => {
    if (!isUserSearched.current) return;
    let products = searchProducts;
    if (!searchText) {
      const filteredProducts = filterProductsByCategory(
        colorFilters,
        genderFilters,
        typeFilters,
        priceFilters,
        searchProducts,
        allProducts
      );
      products = filteredProducts;
    }
    dispatch(updateCurrentProducts(products));
  }, [searchProducts]);

  const handleOnSearchTextChange = (event) => {
    dispatch(updateSearchText(event.target.value));
    isUserSearched.current = true;
  };

  const debounceSearch = (executableFunction, ms) => {
    if (timerId.current) clearTimeout(timerId.current);

    const newTimerId = setTimeout(() => {
      executableFunction();
    }, ms);

    timerId.current = newTimerId;
  };

  useEffect(() => {
    if (!isUserSearched.current) return;
    debounceSearch(updateProducts, DEBOUNCE_TIME);
  }, [searchText]);

  return (
    <Box component="form" sx={{flex: 1}}>
      <OutlinedInput
        size="small"
        placeholder="Search over 100+ products"
        value={searchText}
        onChange={handleOnSearchTextChange}
        sx={{width: {xs: '95%', md: '80%'}, borderRadius: 2}}
      />
    </Box>
  );
};

export default Search;
