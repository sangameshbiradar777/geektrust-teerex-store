const getAvailableFilters = (products, filter) => {
  const filters = [...new Set(products.map((product) => product[filter]))];
  const filtersObject = filters.reduce((object, filter) => {
    return { ...object, [filter]: false };
  }, {});
  return filtersObject;
};

export default getAvailableFilters;
