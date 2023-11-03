import React from "react";
import './loc.css';
import Navbar from "./Navbar";
import Advertisment from "./Advertisment";
const Location = () => {

     return (
          <>
               <Navbar />
               <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" title="myFrame" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=531&amp;height=526&amp;hl=en&amp;q=shankar market connaught place &amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div></div>
               <Advertisment />
          </>
     );
};

export default Location;