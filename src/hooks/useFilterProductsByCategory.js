import store from "../redux/store";

const useFilterProductsByCategory = () => {
  const { colorFilters, genderFilters, typeFilters, priceFilters } =
    store.getState().filters;

  const getSelectedFilters = (filter) => {
    return Object.entries(filter)
      .filter((filter) => filter[1])
      .map((filter) => filter[0]);
  };

  const filterProductsByCategory = (products) => {
    const selectedColorFilters = getSelectedFilters(colorFilters);
    const selectedGenderFilters = getSelectedFilters(genderFilters);
    const selectedTypeFilters = getSelectedFilters(typeFilters);

    products = products.filter(
      (product) =>
        product.price >= priceFilters[0] && product.price <= priceFilters[1]
    );

    if (selectedGenderFilters.length) {
      products = products.filter((product) =>
        selectedGenderFilters.includes(product.gender)
      );
    }
    if (selectedTypeFilters.length) {
      products = products.filter((product) =>
        selectedTypeFilters.includes(product.type)
      );
    }
    if (selectedColorFilters.length) {
      products = products.filter((product) =>
        selectedColorFilters.includes(product.color)
      );
    }

    return products;
  };

  return filterProductsByCategory;
};

export default useFilterProductsByCategory;
