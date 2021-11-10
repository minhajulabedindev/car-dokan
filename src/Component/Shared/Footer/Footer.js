import React from "react";
import logo from "../../../Images/logo/logo-1.png";
const Footer = () => {
    return (
        <div className="  bg-success text-dark bg-opacity-50 ">
            <div className=" p-5 row container">
                <div className="col-lg-8 col-sm-12 ">
                    <div className="text-start ms-lg-5">
                        <h5>Tourism Paradise </h5>
                        <img
                            style={{ width: "70px" }}
                            className=" rounded ms-lg-5 mt-3"
                            src={logo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 ">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 ">
                            <p>About us</p>
                            <p>Support us</p>
                            <p>Contract us</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <p>Trust Center</p>
                            <p>Enterprise Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-2">
              <h1><i class="fab fa-facebook-square m-2"></i><i class="fab fa-instagram-square m-2"></i><i class="fab fa-twitter-square m-2"></i></h1>
                <p>© 2021 Tourism Paradise Ltd. </p>
            </div>
        </div>
    );
};

export default Footer;
