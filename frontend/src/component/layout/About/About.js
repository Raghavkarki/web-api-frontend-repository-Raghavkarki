import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Typography>The MerchPerch</Typography>
            <span>The MerchPerch for Shopping your Goods</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
