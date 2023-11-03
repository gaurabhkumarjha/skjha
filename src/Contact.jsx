import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Contact.css'
import Navbar from "./Navbar";
import Footer from './Footer'
const Contact = () => {

    return (

        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">

                        <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasLabel">Ourdetails</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                Services: GST RETURN || FILING OF ITR || GST REGISTRATION || ACCOUNTANCY SERVICES || CASE & ASSESSMENT<br></br><br></br>
                                Address: Shankar Market Connaught Place New Delhi- 110001
                                <br></br>
                                Mobile NO: 9911718908
                                <br></br>
                                Email id: sunilacck@yahoo.com
                            </div>
                        </div>

                        <div className="touch"><h3> -- get in touch -- </h3></div>
                        <form className="cont" action="https://formspree.io/f/meqdyvjn" method="POST">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Name" name="UserName" required autoComplete="off" />
                                <label for="floatingInput">Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingPassword" placeholder="Password" name="PhoneNumber" required autoComplete="off" />
                                <label for="floatingPassword">Phone Number</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="UserEmail"  autoComplete="off" />
                                <label for="floatingInput">Email</label>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} name="UserMessage"  autoComplete="off"></textarea>
                                <label for="floatingTextarea2">Write Your Message</label>
                            </div>

                            <button type="submit" class="btn btn-success">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default Contact;