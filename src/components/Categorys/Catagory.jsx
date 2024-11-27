import React from 'react'
import { categoryInfos } from "./catagoryData"
import CatagoryCards from "./CatagoryCards"
import classes from "./catagory.module.css"

function Catagory() {

      return (
        <section className={classes.category__container}>
          {categoryInfos.map((infos, index) => (
            <section key={index}>
              <CatagoryCards data={infos} />
            </section>
          ))}
        </section>
      );
};

export default Catagory
