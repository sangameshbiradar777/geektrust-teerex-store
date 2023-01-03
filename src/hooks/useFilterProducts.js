import useFilterProductsByCategory from './useFilterProductsByCategory';
import useFilterProductsBySearch from './useFilterProductsBySearch';

const useFilterProducts = () => {
  const filterProductsBySearch = useFilterProductsBySearch();
  const filterProductsByCategory = useFilterProductsByCategory();

  const filterProducts = () => {
    let productsFilteredBySearch = filterProductsBySearch();
    console.log(productsFilteredBySearch);
    let prductsFilteredByCategory = filterProductsByCategory(productsFilteredBySearch);

    return prductsFilteredByCategory;
  }

  return filterProducts;
}

export default useFilterProducts;