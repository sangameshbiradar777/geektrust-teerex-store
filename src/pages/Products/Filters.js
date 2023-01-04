import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeFilters,
  clearFilters,
} from "../../redux/slice/filtersSlice";
import getMinAndMaxPrice from "../../utils/getMinAndMaxPrice";
import { Stack } from "@mui/material";
import ColorFilters from "./ColorFilters";
import GenderFilters from "./GenderFilters";
import PriceFilters from "./PriceFilters";
import TypeFilters from "./typeFilters";
import FiltersHeader from "./FiltersHeader";

const Filters = ({ isDialog }) => {
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [minPrice, maxPrice] = getMinAndMaxPrice(allProducts);

  const getAvailableFilters = (products, filter) => {
    const filters = [...new Set(products.map((product) => product[filter]))];
    const filtersObject = filters.reduce((object, filter) => {
      return { ...object, [filter]: false };
    }, {});
    return filtersObject;
  };

  const initFilters = () => {
    const availabeColorFilters = getAvailableFilters(allProducts, "color");
    const availabeGenderFilters = getAvailableFilters(allProducts, "gender");
    const availabeTypeFilters = getAvailableFilters(allProducts, "type");
    dispatch(
      initializeFilters({
        colorFilters: availabeColorFilters,
        genderFilters: availabeGenderFilters,
        priceFilters: [minPrice, maxPrice],
        typeFilters: availabeTypeFilters,
      })
    );
  };

  const handleOnClearFilters = () => {
    dispatch(clearFilters([minPrice, maxPrice]));
  };

  console.count("filter component");

  useEffect(() => {
    if (!allProducts.length) return;
    initFilters();
  }, [allProducts]);

  useEffect(() => {
    return () => {
      dispatch(clearFilters([minPrice, maxPrice]));
    };
  }, []);

  return (
    <Stack>
      {!isDialog && (
        <FiltersHeader handleOnClearFilters={handleOnClearFilters} />
      )}
      {!!allProducts.length && (
        <Stack gap={2}>
          <ColorFilters />
          <GenderFilters />
          <PriceFilters />
          <TypeFilters />
        </Stack>
      )}
    </Stack>
  );
};

export default React.memo(Filters);
