const useFilterProductsBySearch = () => {
  const filterProductsBySearch = (products, searchText) => {
    if (!searchText) return [];
    const filteredProducts = products.filter((product) => {
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

    return filteredProducts;
  }

  return filterProductsBySearch;
}

export default useFilterProductsBySearch;