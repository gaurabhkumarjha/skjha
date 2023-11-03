import React from "react";
import Footer from './Footer'
import './Home.css'
import Navbar from "./Navbar";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate } from "react-router-dom";


const gstregistration = 'https://content.jdmagicbox.com/comp/delhi/q5/pwfl1515408646t3p7q5/catalogue/gst-registration-kart-delhi-f57k1.jpg?clr=4a1c1c';
const gstreturn = 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/gst-retrun-filing.jpg';
const itr = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAaChHmkQ33vknC-BMMKuopM2HxQIHiQ2tQ&usqp=CAU';
const accser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn_hv60g0xGwnHOkw2KNSbwItBRZNXV3Lew&usqp=CAU';
const caseass = 'https://media.istockphoto.com/id/1055229130/photo/law.jpg?s=612x612&w=0&k=20&c=d41035YM4yzDFEx5WIcKjFktfi4IUAwTMAcCLrcAJV8=';
const Home = () => {
     const navigate= useNavigate();
     function gotocontactpage(){
      navigate('/contact')
     }
     const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
     return (
          <>
               <Navbar />
     <div className="mb-5"></div>
<div className="container">
  <div className="row">
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={gstregistration} class="d-block w-100" alt="..." style={{width: '100%', height: '500px'}}/>
    </div>
    <div class="carousel-item">
      <img src={gstreturn} class="d-block" alt="..." style={{width: '100%', height: '500px'}}/>
    </div>
    <div class="carousel-item">
      <img src={caseass} class="d-block" alt="..." style={{width: '100%', height: '500px'}}/>
    </div>
    <div class="carousel-item">
      <img src={itr} class="d-block w-100" alt="..." style={{width: '100%', height: '500px'}}/>
    </div>
    <div class="carousel-item">
      <img src={accser} class="d-block w-100" alt="..." style={{width: '100%', height: '500px'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
  </div>
</div>


<div className="mb-5"></div>
<h2>Our Services</h2>
<div className="mb-5"></div>
<div className="container">
  <div className="row">
  <Carousel responsive={responsive} autoPlay infinite>
  <div>
  <div class="card" style={{"width": "18rem"}}>
  <img src={gstregistration} class="card-img-top" alt="..." style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">GST Registration</h5>
    <p class="card-text">Starting price:- &#8377;1500/-</p>
    <a href="/Details" class="btn btn-dark">More Details</a>
  </div>
</div>
  </div>
  <div>
  <div class="card" style={{"width": "18rem"}}>
  <img src={gstreturn} class="card-img-top" alt="..." style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">Filing of GST Return</h5>
    <p class="card-text">Starting Price:- &#8377;500/-</p>
    <a href="/Details" class="btn btn-dark">More Details</a>
  </div>
</div>
  </div>
  <div>
  <div class="card" style={{"width": "18rem"}}>
  <img src={caseass} class="card-img-top" alt="..." style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">Case & Assesment</h5>
    <p class="card-text">At very low cost*</p>
    <a href="/Details" class="btn btn-dark">More Details</a>
  </div>
</div>
  </div>
  <div>
  <div class="card" style={{"width": "18rem"}}>
  <img src={itr} class="card-img-top" alt="..." style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">Filing of ITR</h5>
    <p class="card-text">Starting price:- &#8377;750</p>
    <a href="/Details" class="btn btn-dark">More Details</a>
  </div>
</div>
</div>
<div>
 <div>
  <div class="card" style={{"width": "18rem"}}>
  <img src={accser} class="card-img-top" alt="..." style={{height: '200px'}}/>
  <div class="card-body">
    <h5 class="card-title">Accountancy services</h5>
    <p class="card-text">At very low cost*</p>
    <a href="/Details" class="btn btn-dark">More Details</a>
  </div>
</div>
  </div>
  </div>
</Carousel>
  </div>
</div>

<div className="mb-5"></div>
<h2>Contact Us</h2>
<div className="mb-5"></div>
<div className="container">
  <div className="row">
  <div class="cardd purple" data-aos="fade-right" >
  <h1>Have any doubut, feel to free call us!</h1>
  <div className="mb-3"></div>
  <div className="row">
  <div className="col-sm-6 col-md-6">
  <p>Timing 10:00 AM to 05:00 PM</p>
  </div>
  <div className="col-sm-6 col-md-6">
  <h5><PhoneForwardedIcon/> +91 9911-71-8908.</h5>
  </div>
  </div>
  <button className="contact-btn" onClick={gotocontactpage}>More Details</button>
</div>

 
  </div>
</div>

<div className="mb-5"></div>

 <Footer/>
          </>
     );
};

export default Home;