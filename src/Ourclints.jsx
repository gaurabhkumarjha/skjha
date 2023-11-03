import React from "react";
import './Ourclint.css'
const Ourclints = () => {

     function popserve(){
        window.location.href="/service";
     }
    return (
        <>
        <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-10 col-12 mx-auto">
            <div class='wrapper' onClick={popserve}>
                <div class='carousel'>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                           1. 
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>FILING OF ITR</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            2.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>FILING OF GST RETURN</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            3.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>GST REGISTRATION</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            4.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>ACCOUNTANCY SERVICES</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            5.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>CASE AND ASSESSMENT</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            6.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>AUDIT</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            7.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>BOOK WRITING</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            8.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>EWAY-BILL</p>
                            <p></p>
                        </div>
                    </div>
                    <div class='carousel__item'>
                        <div class='carousel__item-head'>
                            9.
                        </div>
                        <div class='carousel__item-body'>
                            <p class='title'>LEGAL-ADVISOR</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>
            </div>
        </>
    );
};

export default Ourclints;