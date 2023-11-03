import React from "react";
import Navbar from "./Navbar";
import Advertisment from "./Advertisment";

const Moredetails = () => {
     
     return (
          <>
               <Navbar />
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-10 col-12 mx-auto">

                             <ol className="imppoints" style={{display: "flex",  "flex-direction": "column" , "align-items": "center"}}>
                                <h3>Important Points:</h3>
                                <li>Every Work At Very Low Price</li>
                                <li>In Audited Case Will Charge Extra</li>
                                <li>Case & Assessment Fees According To Work</li>
                             </ol>

                             <ol>
                                <h5>ITR Fees (ANNUAL):</h5>
                                <li>ITR-1 &#8377;750/-</li>
                                <li>ITR-2 &#8377;1000/-</li>
                                <li>ITR-3 &#8377;2000/-</li>
                                <li>ITR-4 &#8377;2000/-</li>
                                <li>ITR-5 &#8377;2000/-</li>
                                <li>ITR-6 &#8377;2000/-</li>
                             </ol>

                             <ol>
                                <h5>GST Return Fees (MONTHLY):</h5>
                                <li>GSTR-1 &#8377;500/-</li>
                                <li>GSTR-3B &#8377;500/-</li>
                             </ol>

                             <ol>
                                <h5>GST Registration Fees:</h5>
                                <li> &#8377;1500/-</li>
                             </ol>

                             <ol>
                                <h5>Accountancy Services Fees:</h5>
                                <li>*According To Work </li>
                             </ol>

                             <ol>
                                <h5>Case & Assessment Fees:</h5>
                                <li>*According To Work </li>
                             </ol>
                         </div>
                    </div>
               </div>
               <Advertisment />
          </>
     );
};

export default Moredetails;