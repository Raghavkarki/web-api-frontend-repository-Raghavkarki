import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Good Shoes available</h4>
      </div>

      <div className="midFooter">
        <h1>Easy Shoe Store.</h1>
        <p>Customer Satisfaction is our motto</p>

        <p>Copyrights 2021 &copy; Easy Shoe Store</p>
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
