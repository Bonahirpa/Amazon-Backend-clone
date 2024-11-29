import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './Product.module.css'
import Loader from "../Loader/Loader";
const Product = () => {
  const [products, setproducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                key={singleProduct.id}
              renderAdd={true}/>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;
