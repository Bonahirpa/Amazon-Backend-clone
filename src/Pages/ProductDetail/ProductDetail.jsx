import React, { useEffect, useState } from 'react'
// import classes from "./ProductDetail.module.css"
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'
function ProductDetail() {
    
  const { productId } = useParams()
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard product={product} flex={true} />
      ) : (
        <Loader />
      )}
    </LayOut>
  );

}

export default ProductDetail
