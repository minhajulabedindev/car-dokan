import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageOrder = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return <div></div>;
};

export default ManageOrder;
