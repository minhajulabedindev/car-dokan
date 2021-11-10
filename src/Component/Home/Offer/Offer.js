import React, { useEffect, useState } from "react";
import Offers from "./Offers";

const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="my-5">
      <h1 className="textse ">Choose Your Favorite Package</h1>

      <div className="row my-lg-5">
        {offers.map((offer) => (
          <Offers key={offer._id} offer={offer}></Offers>
        ))}
      </div>
    </div>
  );
};

export default Offer;
