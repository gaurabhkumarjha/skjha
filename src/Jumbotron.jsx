import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Qrcode from './qrcode.jpg';
import './Jumbotron.css';
const Jumbotron = () => {

    return (
        <>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasTopLabel">PAY</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <img src={Qrcode} alt="qrcode" style={{width: "5rem", "border-right": "2px solid blue"}} className="qrcode"/>
                    <ol className="howtopayqr">
                        <p>How to pay using QR code.</p>
                        <li>Open your UPI app like Google Pay, Paytm, PhonePay etc.</li>
                        <li>Scan QR code</li>
                        <li>Enter Amount and Your Details like Name and Phone Number in Notes Section</li>
                    </ol>
                    <div className="or"><h4>or</h4></div>  
                    <p className="paytmupi">UPI ID: 9773870841709@paytm || UPI ID: gaurabhkumarjha27102001@okhdfcbank</p>
                    <ol className="howtopayupi">
                        <p>How to pay using UPI ID.</p>
                        <li>Open your UPI app like Google Pay, Paytm, PhonePay etc.</li>
                        <li>Goto Pay UPI ID Section.</li>
                        <li>Type any one UPI ID in your UPI app</li>
                        <li>Enter Amount and Your Details like Name and Phone Number in Notes Section</li>
                    </ol> 

                </div>
            </div>
        </>
    );
}

export default Jumbotron;