import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Footer.css'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
const Footer = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="bg footer">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-xs-12 mt-3">
                                <h6>About our company</h6>
                                <p className="mb-3">Auditing & legal advisor company</p>
                            </div>
                            <div className="col-sm-3 col-md-3 col-xs-12 mt-3">
                                <h6>Usefull links</h6>
                                <li className="mb-1">
                                    <a href="/contact">Contact US</a>
                                </li>
                                <li className="mb-3">
                                    <a href="/service">All Services</a>
                                </li>
                            </div>
                            <div className="col-sm-3 col-md-3 col-xs-12 mt-3" style={{ listStyle: "none" }}>
                                <h6>Details</h6>
                                <li className="mb-3"><ApartmentIcon />Shop Number- 37, Shankar Market Connaught Place New Delhi- 110001</li>
                                <li className="mb-3"><EmailIcon />sunilacck@yahoo.com</li>
                                <li className="mb-3"><PhoneForwardedIcon /> 9911-71-8908</li>
                            </div>
                        </div>

                        <div className="copyright">
                            <p> &#169; All Rights Reserverd 2022-{new Date().getFullYear()}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.6rem' }}>~Developed By Rhombus</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Footer;