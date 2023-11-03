import React from "react";
import Footer from './Footer'
import Ourclints from "./Ourclints";
import './Home.css'
import Navbar from "./Navbar";
const Home = () => {


     function ser() {
          window.location.href = "/service";
     }
     return (
          <>
               <Navbar />
               <Ourclints />
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-10 col-12 mx-auto">
                              <h3 className="gorw">Grow Your Business With</h3>
                              <h2 className="sunil">SUNILKUMARJHA</h2>
                              <button type="button" class="btn btn-warning lgs" onClick={ser}>Let's Get Started</button>
                         </div>
                    </div>
               </div>
               <Footer />

          </>
     );
};

export default Home;