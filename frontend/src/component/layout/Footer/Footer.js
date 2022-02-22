import React from "react";
import playStore from "../../../images/playstore.png";
import logo from "../../../images/mainlogo.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />    
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
      < img src={logo} alt="mainlogo" />
        <h1>The MerchPerch.</h1>
        <p>Customer Satisfaction is our motto</p>

        <p>Copyrights 2021 &copy; The MerchPerch</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/test">Instagram</a>
        <a href="http://youtube.com/test">Youtube</a>
        <a href="http://instagram.com/test">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
