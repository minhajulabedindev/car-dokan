// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const MyBooking = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/offers/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  //delete

  const handlebtn = () => {
    history.push("/success");
  };
  return (
    <div>
      <h1>This is the Booking</h1>
      <div className=" container border border-light p-3">
        <h3>{detail.name}</h3>
        <img className="w-50" src={detail.img} alt="" />
        <p>{detail.discription}</p>

        <Button onClick={handlebtn}>Package Booking</Button>
      </div>
    </div>
  );
};

export default MyBooking;
