
import {img} from "./img/data"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css"
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemsLink) => {
          return <img key={imageItemsLink} src={imageItemsLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}>
      </div>
    </div>
  );
}

export default CarouselEffect;

