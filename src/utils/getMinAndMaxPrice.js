const getMinAndMaxPrice = (products) => {
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));

  return [minPrice, maxPrice];
};

export default getMinAndMaxPrice;
