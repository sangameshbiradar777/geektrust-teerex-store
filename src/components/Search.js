import { Box, TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchProducts } from "../redux/slice/productsSlice";

const Search = () => {
  const DEBOUNCE_TIME = 400; // IN MILLI_SECONDS
  const [searchText, setSearchText] = useState("");
  const timerId = useRef(null);
  const { filteredProducts, allProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  


  const updateProducts = () => {
    let currentProducts = filteredProducts.length
    ? filteredProducts
    : allProducts;
    console.log('currentProducts: ', currentProducts);
    
    console.log(searchText)
    if (!searchText) {
      console.log('searchtext', currentProducts)
      dispatch(updateSearchProducts(currentProducts));
      return;
    }

    let searchProducts = currentProducts.filter((product) => {
      const color = product.color.toLowerCase();
      const name = product.name.toLowerCase();
      const gender = product.gender.toLowerCase();
      const price = String(product.price).toLowerCase();
      const type = product.type.toLowerCase();

      const isMatchingProduct =
        color.includes(searchText) ||
        name.includes(searchText) ||
        gender.startsWith(searchText) ||
        price.startsWith(searchText) ||
        type.includes(searchText);

      return isMatchingProduct;
    });
    
    dispatch(updateSearchProducts(searchProducts));
  };

  const handleOnSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const debounceSearch = (executableFunction, ms) => {
    if (timerId.current) clearTimeout(timerId.current);

    const newTimerId = setTimeout(() => {
      executableFunction();
    }, ms);

    timerId.current = newTimerId;
  };

  useEffect(() => {
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
