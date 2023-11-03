import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
const Offers = () => {

    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className='mt-3'></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div class="card text-bg-secondary mb-3 r-cen" style={{ "max-width": "18rem", "box-shadow": "10px 10px 5px 0px rgba(0,0,0,0.75)" }}>
                            <div class="card-header" style={{ color: "aqua" }}>Combo</div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "beige" }}>GST Return + ITR Filing + Accountancy &#8377; 2000 PerMonth.</h5>
                                <p class="card-text">NOTE:-  IT Audit Charges Extra || GST Audit Charges Extra || All Taxes Extra</p>

                                <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">scan to Pay</button>
                            </div>
                        </div>

                        <div class="card text-bg-info mb-3 r-cen" style={{ "max-width": "18rem", "box-shadow": "10px 10px 5px 0px rgba(0,0,0,0.75)" }}>
                            <div class="card-header" style={{ color: "white" }}>Combo</div>
                            <div class="card-body">
                                <h5 class="card-title">ITR + Accountancy For Business Income &#8377; 6000 Yearly. (Normal Course)</h5>
                                <p class="card-text">NOTE:-  IT Audit Charges Extra || GST Audit Charges Extra || All Taxes Extra</p>
                                <button class="btn btn-warning mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">scan to Pay</button>
                            </div>
                        </div>
                        <div class="card text-bg-warning mb-3 r-cen" style={{ "max-width": "18rem", "box-shadow": "10px 10px 5px 0px rgba(0,0,0,0.75)" }}>
                            <div class="card-header">Combo</div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "Blue" }}>Accountancy &#8377; 5000 Yearly. (Normal Course)</h5>
                                <p class="card-text">NOTE:-  IT Audit Charges Extra || GST Audit Charges Extra || All Taxes Extra</p>
                                <button class="btn btn-primary mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">scan to Pay</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mb-5'></div>
            <Footer />
        </>
    );
}

export default Offers;