import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import classes from "./header.module.css"
import amazon_letter_logo from "../../assets/images/logo/amazon_letter_white_logo.png";
import { BiCart } from "react-icons/bi";
import { auth } from '../../Utility/firebase';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
const Header = () => {

  const [{user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img src={amazon_letter_logo} alt="" />
            </Link>
            <div className={classes.delivery}>
              <span>
                {/* icon */}
               <SlLocationPin />
                {/* {SlLocationPin} */}
              </span>
              <div>
                <p>Delivery to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={38} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/Link/Link4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut}>Sign Out</span>
                    {/* onClick={handleSignOutAndClearCart} */}
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    {/* <span>Account & Lists</span> */}
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>{{ basket.length}}</span>
            </Link> */}
            <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header


