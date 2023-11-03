import React from "react";
import Footer from './Footer'
import Navbar from "./Navbar";
import './Error.css'
const Error = () => {

    return (

        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto mb-5">
                        <div className="bindup">
                            <h1>~404 ERROR PAGE</h1>
                            <h3>OOPS! SOMETHING WENT WRONG GO TO HOME PAGE
                                <br />
                                <a href="/">Home</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Error;