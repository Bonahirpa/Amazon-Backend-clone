import React from 'react'

import CarouselEffect from "../../components/Carousel/CarouselEffect"
import Product from "../../components/Product/Product"
import LayOut from "../../components/LayOut/LayOut"
import Catagory from "../../components/Categorys/Catagory"
function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing
