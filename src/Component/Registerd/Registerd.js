import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/UseAuth";

const Registerd = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    signWithGoogleIn,
    user,
    setUser,
    signInEmailPassord,
    isLoding,
    setisLogin,
  } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  //====================================================
  const onSubmit = (event) => {
    event.preventDefault();
    signInEmailPassord(email, password)
      .then((res) => {
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {});
  };

  // const createAccountEmail = () => {

  // };
  return (
    <div>
      <h1>This is the Registerd </h1>
      <div className="d-flex mt-5">
        <form onSubmit={onSubmit} className="row w-75 mx-auto g-3">
          <h2> Please Register</h2>
          <input type="text" onBlur={handleName} placeholder="Name" />
          <input placeholder="Email" onBlur={handleEmail} type="email" />
          <input
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
          <input type="submit" /> :
        </form>
        <p>
          New User <Link to="/login"> please Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registerd;
