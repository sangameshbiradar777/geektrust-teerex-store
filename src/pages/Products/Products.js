import { Grid } from "@mui/material";
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

const Products = () => {
  const products = useSelector((state) => state.products.currentProducts);
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
    <Grid item xs={12} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {products.length ? productCards : null}
    </Grid>
  );
};

export default Products;
