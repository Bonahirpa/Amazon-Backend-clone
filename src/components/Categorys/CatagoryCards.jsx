import React from "react";
import { Link } from "react-router-dom";
import classes from "./catagory.module.css";

const CatagoryCards = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={`Image of ${data.title}`} />

        <p>Shop Now</p>
      </Link>
    </div>
  );
};
export default CatagoryCards;
