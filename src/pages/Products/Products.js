import { Grid, Typography, Stack, Box } from "@mui/material";
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
import Error from "../../components/Error";
import NoProductsFound from "./NoProductsFound";

const Products = () => {
  const { currentProducts: products, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(productsFetchStart());
    try {
      const { data } = await axios.get(ENDPOINT);
      dispatch(productsFetchSuccess(data));
    } catch (error) {
      dispatch(productsFetchFailure(error));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productCards = products.map((product) => (
    <Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {products.length ? (
        productCards
      ) : !isLoading ? (
        <NoProductsFound />
      ) : null}
    </Grid>
  );
};

export default Products;
