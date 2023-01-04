import { Box, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchText } from "../../redux/slice/searchSlice";
import useFilterProducts from "../../hooks/useFilterProducts";
import useDebounce from "../../hooks/useDebounce";
import { DEBOUNCE_TIME } from "../../config/config";
import { updateCurrentProducts } from "../../redux/slice/productsSlice";

const Search = () => {
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const filterProducts = useFilterProducts();
  const debounce = useDebounce();
  const isUserSearched = useRef();

  const handleOnSearchTextChange = (event) => {
    dispatch(updateSearchText(event.target.value));
    isUserSearched.current = true;
  };

  useEffect(() => {
    if (!isUserSearched.current) return;
    debounce(() => {
      const filteredProducts = filterProducts();
      dispatch(updateCurrentProducts(filteredProducts));
    }, DEBOUNCE_TIME);
  }, [searchText]);

  useEffect(() => {
    return () => {
      dispatch(updateSearchText(""));
    };
  }, []);

  return (
    <Box component="form" sx={{ flex: 1 }}>
      <OutlinedInput
        size="small"
        placeholder="Search over 100+ products"
        value={searchText}
        onChange={handleOnSearchTextChange}
        startAdornment={
          <InputAdornment position="start">
            <ion-icon
              style={{ color: "#777", fontSize: "1.1rem" }}
              name="search-outline"
            ></ion-icon>
          </InputAdornment>
        }
        sx={{ width: { xs: "95%", md: "80%" }, borderRadius: 2 }}
      />
    </Box>
  );
};

export default Search;
