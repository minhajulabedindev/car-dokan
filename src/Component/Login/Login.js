import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

import UseFirebase from "../Hooks/UseFirebase";

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  //-------------------- Part of login -----------------------------------------------
  const { signWithGoogleIn, setUser, user, LoginInEmailPassord } = useAuth();
  //----------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //-----------need for redirect-----------------------
  const url = location.state?.from || "/home";

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  //===================================================
  const handleLoginWithEmailAndPassword = (event) => {
    event.preventDefault();

    LoginInEmailPassord(email, password)
      .then((res) => {
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  //---------------------------------
  const handlebtn = () => {
    signWithGoogleIn().then((result) => {
      setUser(result.user);
      history.push(url);
    });
  };
  return (
    <div>
      <div className="d-flex mt-5">
        <form
          onSubmit={handleLoginWithEmailAndPassword}
          className="row w-75 mx-auto g-3"
        >
          <h2> Please Login</h2>
          <input placeholder="Email" onBlur={handleEmail} type="email" />
          <input
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
          <input type="submit" /> :
        </form>
      </div>
      <Button onClick={handlebtn}> Sign In Google</Button>
      <p>
        New User <Link to="/register"> please register</Link>
      </p>
    </div>
  );
};

export default Login;
