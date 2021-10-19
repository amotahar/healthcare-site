import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="p-3 main_footer">
                <div className="row p-3">
<div className="col-12 col-sm-12 col-md-4 col-lg-4  text-center">
    <ul className="list1">
        <h2>Contact-Us</h2>
        <li>Dhaka Bangladesh</li>
        <li> motaharhosssain.cse@gmail.com</li>
        <li>Mobile: +88000986546</li>
      
    </ul>
</div>
<div className="col-12 col-sm-12 col-md-4 col-lg-4  text-center">
<ul className="list2">
        <h2>QUICK LINK</h2>
        <li>Health Insurance by Destination</li>
        <li>Schengen Visa</li>
        <li>Travel Insurance by  Activity </li>
        <li>Visitiors to U.S.A</li>
       
    </ul>
</div>
<div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
<ul className="list3">
        <h2>Social Media</h2>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Whatsapp</li>
    </ul>

</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;