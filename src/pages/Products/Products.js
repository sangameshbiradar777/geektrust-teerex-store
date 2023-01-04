import { Grid, Typography, } from "@mui/material";
import { ENDPOINT } from "../../config/config";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsFetchStart,
  productsFetchSuccess,
  productsFetchFailure,
} from "../../redux/slice/productsSlice";
import ProductCard from "../../components/ProductCard";
import NoProductsFound from "./NoProductsFound";
import Error from "../../components/Error";
import ErrorIcon from "../../components/ErrorIcon";

const Products = () => {
  const {
    currentProducts: products,
    allProducts,
    isLoading,
    error,
  } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(productsFetchStart());
    try {
      const { data } = await axios.get(ENDPOINT);
      dispatch(productsFetchSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(productsFetchFailure(error));
    }
  };

  useEffect(() => {
    if (allProducts.length) return;
    fetchProducts();
  }, []);

  const productCards = products.map((product) => {
    const cartItem = items.find(item => item.id === product.id);
    return (
      <Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
        <ProductCard product={product} cartItem={cartItem} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {error.message ? (
        <Error>
          <ErrorIcon icon="cloud-offline" />
          <Typography sx={{ fontSize: 36, fontWeight: 600, color: "#888" }}>
            {error.message}
          </Typography>
        </Error>
      ) : products.length ? (
        productCards
      ) : !isLoading ? (
        <NoProductsFound />
      ) : null}
    </Grid>
  );
};

export default Products;
