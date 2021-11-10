import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const Purchasec = () => {
  const offers = useParams();
  const { name, img, price } = offers;
  console.log(name, img, price);

  const [booking, setBooking] = useState();
  // const [offers, setOffers] = useState([]);

  const handleBookingBtn = () => {
    axios.post("http://localhost:5000/booking", offers).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully");
      }
    });
  };
  return (
    <div className="background">
      <Button className=" mt-2" onClick={handleBookingBtn}>
        Comfirm Booking
      </Button>
    </div>
  );
};

export default Purchasec;
