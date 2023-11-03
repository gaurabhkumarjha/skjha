import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Services from './Services';
import Error from './Error.jsx';
import Moredetails from "./Moredetails";
import Offers from "./Offers.jsx";

const App = () => {

    return (
        
          <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}></Route>
                <Route  path="/contact" element={<Contact/>}></Route>
                <Route  path="/service" element={<Services/>}></Route>
                <Route  path="/Details" element={<Moredetails/>}></Route>
                <Route  path="/Offers" element={<Offers/>}></Route>
                <Route  path="*" element={<Error/>}></Route>

            </Routes>
         </BrowserRouter>

    );
}

export default App;

