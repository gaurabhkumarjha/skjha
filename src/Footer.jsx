import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Footer.css'
const Footer = () => {

    return (
        <>
            <div className="bg footer">

                <a class="navbar-brand" href="/">
                    <img src="https://t3.ftcdn.net/jpg/05/27/90/76/360_F_527907602_yT0DhDWezRiwsawY7OLkptYErjYLBJeC.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                    Auditing Legal-Advisior & Accountancy Company 
                </a>

                <div className="copyright">
                  <p> &#169; All Rights Reserverd 2022</p>
                </div>
            </div>
        </>
    );
};

export default Footer;