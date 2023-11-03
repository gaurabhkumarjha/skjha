import React from "react";
import Servicecompo from "./Servicecompo";
import Navbar from "./Navbar";
const gstregistration = 'https://content.jdmagicbox.com/comp/delhi/q5/pwfl1515408646t3p7q5/catalogue/gst-registration-kart-delhi-f57k1.jpg?clr=4a1c1c';
const gstreturn = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzNIoqZ1FsWY1VsL9zw84pIAz5mppCxmNew&usqp=CAU';
const itr = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAaChHmkQ33vknC-BMMKuopM2HxQIHiQ2tQ&usqp=CAU';
const accser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn_hv60g0xGwnHOkw2KNSbwItBRZNXV3Lew&usqp=CAU';
const caseass = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv76JRZK1KXrG-bWdZzgRgt-S8zVdY4Ti4MA&usqp=CAU';
const Services = () => {

    return (

        <>
            <Navbar />
            <div class="container">
                <div class="row">

                    <Servicecompo cname={"GST REGISTRATION"} cimg={gstregistration} cdescription={"New Registration ETC."} />
                    <Servicecompo cname={"FILING OF GST RETURN"} cimg={gstreturn} cdescription={"GSTR-1, GSTR-2, GSTR- 3B ETC. SGST, CGST & IGST"} />
                    <Servicecompo cname={"FILING OF ITR"} cimg={itr} cdescription={"ITR-1, ITR-2, ITR- 3, ITR- 4, ITR- 5, ITR- 6 ETC."} />
                    <Servicecompo cname={"ACCOUNTANCY SERVICES"} cimg={accser} cdescription={"Book keeping, Chartered accounting, Tax accounting, Account auditing."} />
                    <Servicecompo cname={"CASE & ASSESSMENT"} cimg={caseass} cdescription={"According to work."} />
                </div>
            </div>
        </>
    );
};

export default Services;