import React from "react";
import MyBooking from "../MyBooking/MyBooking";
import { useEffect, useState } from "react";
import BookingAll from "./BookingAll";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div className="">
      <div className="container p-5 ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Name</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Place</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Price</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Buy / Deleted</h3>
          </div>
        </div>
        <hr />
        <div className="my-lg-5">
          {booking.map((book) => (
            <BookingAll key={book._id} offer={book}></BookingAll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
