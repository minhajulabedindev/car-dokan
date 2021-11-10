import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../MyVerticallyCenteredModal/MyVerticallyCenteredModal";
import useAuth from "../Hooks/UseAuth";

const Order = () => {
  const { user } = useAuth();
  console.log(user.displayName);

  const { id } = useParams();
  const [offers, setOffers] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/offers/${id}`)
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  const handleBookingBtn = () => {
    axios.post("http://localhost:5000/booking", offers).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully");
      }
    });
  };
  return (
    <div className="row container mt-lg-5">
      <div className="col-lg-6 col-sm-12 ">
        <h3>{offers.name}</h3>
        <img className="w-50 rounded-3 mx-auto" src={offers.img} alt="" />

        <h5>You can booking now</h5>
        <h4>Price: $ {offers.price}</h4>
        <div>
          {/* <Button
            variant="outline-primary my-lg-3"
            className=" mt-2"
            onClick={handleBookingBtn}
          >
            Booking
          </Button> */}
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Booking
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img
          className="w-100"
          src="https://image.freepik.com/free-vector/colleagues-communicating-break_74855-6302.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Order;
