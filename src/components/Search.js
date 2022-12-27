import { Box, TextField } from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts } from "../redux/slice/productsSlice";
import {  updateSearchProducts } from '../redux/slice/filtersSlice';
import useFilterProductsBySearch from "../hooks/useFilterProductsBySearch";
import useFilterProductsByCategory from "../hooks/useFilterProductsByCategory";

const Search = () => {
  const DEBOUNCE_TIME = 400; // IN MILLI_SECONDS
  const [searchText, setSearchText] = useState('');
  const { searchProducts, filteredProducts, colorFilters, genderFilters, typeFilters } = useSelector(state => state.filters);
  const timerId = useRef(null);
  const { allProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const filterProductsBySearch = useFilterProductsBySearch();
  const filterProductsByCategory = useFilterProductsByCategory();
  const isUserSearched = useRef(false);
  
  const updateProducts = () => {
    let currentProducts = filteredProducts.length
    ? filteredProducts
      : allProducts;

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
        searchProducts,
        allProducts
      );
      products = filteredProducts;
    }
    dispatch(updateCurrentProducts(products));
  }, [searchProducts])

  const handleOnSearchTextChange = (event) => {
    setSearchText(event.target.value);
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
    <Box component="form">
      <TextField
        label="Search over 100+ products"
        value={searchText}
        onChange={handleOnSearchTextChange}
        variant="outlined"
      />
    </Box>
  );
};

export default Search;
