import useFilterProductsBySearch from './useFilterProductsBySearch';

const useFilterProductsByCategory = () => {
  const filterProductsBySearch = useFilterProductsBySearch();

  const getSelectedFilters = (filter) => {
    return Object.entries(filter)
      .filter((filter) => filter[1])
      .map((filter) => filter[0]);
  };

  const filterProductsByCategory = (colorFilters, genderFilters, typeFilters, priceFilters, searchText, allProducts) => {
    const selectedColorFilters = getSelectedFilters(colorFilters);
    const selectedGenderFilters = getSelectedFilters(genderFilters);
    const selectedTypeFilters = getSelectedFilters(typeFilters);

    let products = allProducts.filter(product => 
      product.price >= priceFilters[0] && product.price <= priceFilters[1]
    );

    if (searchText) {
      products = filterProductsBySearch(products, searchText);
    }

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
  }

  return filterProductsByCategory;
}

export default useFilterProductsByCategory;