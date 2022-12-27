const useFilterProductsByCategory = () => {
  const getSelectedFilters = (filter) => {
    return Object.entries(filter)
      .filter((filter) => filter[1])
      .map((filter) => filter[0]);
  };

  const filterProductsByCategory = (colorFilters, genderFilters, typeFilters, searchProducts, allProducts) => {
    const selectedColorFilters = getSelectedFilters(colorFilters);
    const selectedGenderFilters = getSelectedFilters(genderFilters);
    const selectedTypeFilters = getSelectedFilters(typeFilters);

    console.log(searchProducts, 'ssssssssssssssss')

    let products = searchProducts.length ? searchProducts : allProducts;

    console.log(allProducts, 'hihihih')

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