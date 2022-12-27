import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import FilterAccordion from "../../components/FilterAccordion";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentProducts, updateFilteredProducts } from "../../redux/slice/productsSlice";

const Filters = () => {
  const { allProducts, searchProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const getAvailabelFilters = (products, filter) => {
    const filters = [...new Set(products.map((product) => product[filter]))];
    const filtersObject = filters.reduce((object, filter) => {
      return { ...object, [filter]: false };
    }, {});
    return filtersObject;
  };

  const getSelectedFilters = (filter) => {
    return Object.entries(filter)
      .filter((filter) => filter[1])
      .map((filter) => filter[0]);
  };

  const getFilteredProducts = (products, filter, targetFilters) => {
    return products.filter(product => targetFilters.includes(product[filter]));
  }

  const [colorFilters, setColorFilters] = useState({});
  const [genderFilters, setGenderFilters] = useState({});
  const [typeFilters, setTypeFilters] = useState({});

  const selectedColorFilters = getSelectedFilters(colorFilters);
  const selectedGenderFilters = getSelectedFilters(genderFilters);
  const selectedTypeFilters = getSelectedFilters(typeFilters);

  const updateProducts = () => {
    let products = searchProducts.length ? searchProducts : allProducts;

    if (!selectedColorFilters.length && !selectedGenderFilters.length && !selectedTypeFilters.length) {
      dispatch(updateFilteredProducts(products));
      return;
    }

    if (selectedGenderFilters.length) {
      products = products.filter(product => selectedGenderFilters.includes(product.gender)); 
    }

    if (!selectedColorFilters.length && !selectedTypeFilters.length) {
      dispatch(updateFilteredProducts(products));
      return;
    }

    const filteredProducts = products.filter(product => {
      return selectedColorFilters.includes(product.color) || selectedTypeFilters.includes(product.type);
    })

    dispatch(updateFilteredProducts(filteredProducts));
  }

  useEffect(() => {
    setColorFilters(getAvailabelFilters(allProducts, "color"));
    setGenderFilters(getAvailabelFilters(allProducts, "gender"));
    setTypeFilters(getAvailabelFilters(allProducts, "type"));
  }, [allProducts]);

  useEffect(() => {
    updateProducts();
  }, [colorFilters, genderFilters, typeFilters])

  const handleOnColorFilterChange = (event) => {
    setColorFilters((state) => ({
      ...state,
      [event.target.name]: !state[event.target.name],
    }));
  };

  const handleOnGenderFilterChange = (event) => {
    setGenderFilters((state) => ({
      ...state,
      [event.target.name]: !state[event.target.name],
    }));
  };

  const handleOnTypeFilterChange = (event) => {
    setTypeFilters((state) => ({
      ...state,
      [event.target.name]: !state[event.target.name],
    }));
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
        filter={typeFilters}
        filterCategory="Type"
        handleOnFilterChange={handleOnTypeFilterChange}
      />
    </>
  );
};

export default Filters;
