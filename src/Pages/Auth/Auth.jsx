import React, { useContext, useState } from 'react'
import classes from "./Auth.module.css"
import amazon_letter_logo from "../../assets/images/logo/amazon_letter_logo.png";
import { auth } from '../../Utility/firebase';
import {DataContext} from "../../components/DataProvider/DataProvider"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Type } from "../../Utility/action.type";

import { ClipLoader } from 'react-spinners';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const [loading, setLoading] = useState({
      signIn: false,
      signUP: false,
    });
  
  // console.log(password, email)
  const [{user}, dispatch]=useContext(DataContext)
  const navigate = useNavigate()
  const navStateData=useLocation()

  const authHandler = (e) => {
    e.preventDefault();

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);

    if (e.target.name.toLowerCase() == "signin") {
      // console.log("buttons match");
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          // console.log(user);
          setLoading({ ...loading, signIn: false });
          // navigate("/");
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          // console.log(error);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          // navigate(navigationStateData?.state?.redirect || "/");
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          // console.log(error);
          setLoading({ ...loading, signUP: false });
        });
    }
  };



  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src={amazon_letter_logo} alt="" />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        {
          <>
            {navStateData?.state?.msg && (
              <small style={{ color: "red", fontWeight: "bold" }}>
                {navStateData?.state?.msg}
              </small>
            )}
            <br />
          </>
        }
        <form action="">
          <div>
            <label htmlFor="email">e-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#f0f40d" size={"15"} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE condition of Use and
          sale. please see our Privacy Notice, our cookies notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create acount btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.signUP ? (
            <ClipLoader color="#15f10a" size={"15"} />
          ) : (
            "  Create Your Amazon Acount"
          )}
        </button>
        {error && <small>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
