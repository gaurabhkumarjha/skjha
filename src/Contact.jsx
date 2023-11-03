import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Contact.css'
import Navbar from "./Navbar";
import Footer from './Footer'
import './loc.css';
const Contact = () => {

    return (

        <>
            <Navbar />
            <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">Our Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    Services: GST RETURN || FILING OF ITR || GST REGISTRATION || ACCOUNTANCY SERVICES || CASE & ASSESSMENT<br></br><br></br>
                    Address: Shop Number- 37, Shankar Market Connaught Place New Delhi- 110001
                    <br></br>
                    Mobile NO: 9911718908
                    <br></br>
                    Email id: sunilacck@yahoo.com
                </div>
            </div>
            <div className="container-fluid">
                <div className="row cont">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="mapouter mb-3"><div class="gmap_canvas"><iframe class="gmap_iframe" title="myFrame" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=531&amp;height=526&amp;hl=en&amp;q=shankar market connaught place &amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
                    </div>
                    <div className="col-md-6 col-sm-6 mx-auto col-lg-6">
                        <form action="https://formspree.io/f/meqdyvjn" method="POST">
                            <div className="card crd-cont">
                                <div className="card-body">


                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Name" name="UserName" required autoComplete="off" />
                                        <label for="floatingInput">Name*</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPassword" placeholder="Password" name="PhoneNumber" required autoComplete="off" />
                                        <label for="floatingPassword">Phone Number*</label>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} name="UserMessage" autoComplete="off"></textarea>
                                        <label for="floatingTextarea2">Write Your Message</label>
                                    </div>

                                    <button type="submit" class="btn btn-dark">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mb-5"></div>
            <Footer />
        </>
    );
};

export default Contact;