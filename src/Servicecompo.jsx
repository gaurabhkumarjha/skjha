import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './servicecompo.css'
import { useAuth0 } from "@auth0/auth0-react";

const Servicecompo = (props) => {
    const { isAuthenticated } = useAuth0();

    function getpopup() {

        if (isAuthenticated) {
            window.location.href = "/Details";  
        }

        else {
     alert("First Login! if you already logged in so change your browser and use stable browser like Chrome");
        }
    }
    return (

        <>

            <div class="card" style={{ width: '18rem' }}>
                <img src={props.cimg} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.cname}</h5>
                    <p class="card-text">{props.cdescription}</p>
                    <button type="button" onClick={getpopup} class="btn btn-warning newbtn">Get More Details</button>
                </div>
            </div>

        </>
    );
};

export default Servicecompo;