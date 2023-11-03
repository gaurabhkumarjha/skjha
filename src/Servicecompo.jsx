import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './servicecompo.css'

const Servicecompo = (props) => {
    function getpopup() {

        window.location.href = "/Details";
    }
    return (

        <>

            <div class="card cardforservice" style={{ width: '18rem' }}>
                <img src={props.cimg} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.cname}</h5>
                    <p class="card-text">{props.cdescription}</p>
                    <button type="button" onClick={getpopup} class="btn btn-info newbtn" style={{borderRadius: '15px', cursor: 'pointer'}}>Get More Details</button>
                </div>
            </div>

        </>
    );
};

export default Servicecompo;