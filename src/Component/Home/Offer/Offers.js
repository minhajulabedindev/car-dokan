import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Offers = (props) => {
    const { name, img, discription, _id, price, discount } = props.offer;
    const history = useHistory();
    const histor = useHistory();
    const [booking, setBooking] = useState();

    const handleBookingBtn = () => {
        history.push(`/purchase/${_id}`);
    };
    const handleDetailsBtn = () => {
        history.push(`/details/${_id}`);
    };
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-2 ">
            <div className="border border-light p-4 rounded-4  hov">
                <h3>{name}</h3>
                <div className="inner">
                    <img className="w-100 h-25" src={img} alt="" />
                </div>

                <p className="texts">{discription.slice(0, 150)} </p>
                <h4>
                    Price: ${price}{" "}
                    <span className="ms-2 text-warning ">{discount}% OFF</span>
                </h4>
                <Button onClick={handleDetailsBtn} className="me-2 mt-2">
                    Details
                </Button>
                <Button className=" mt-2" onClick={handleBookingBtn}>
                    Package Booking
                </Button>
            </div>
        </div>
    );
};

export default Offers;
