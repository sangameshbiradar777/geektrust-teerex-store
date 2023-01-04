import store from "../redux/store";

const useFilterProductsBySearch = () => {
  let { searchText } = store.getState().search;
  const { allProducts } = store.getState().products;

  const filterProductsBySearch = () => {
    if (!searchText) return allProducts;

    searchText = searchText.toLowerCase();

    const filteredProducts = allProducts.filter((product) => {
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
  };

  return filterProductsBySearch;
};

export default useFilterProductsBySearch;
