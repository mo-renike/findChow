import React from "react";
//import images from "../../constants/images";
import './Headings.scss'


export const Heading = ({ title }) => (
  <div>  <h1 className="heading">{title}</h1>
  </div>
);

export const SubHeading = ({ title }) => (
  <div>
    <h4 className="subHeading">{title}</h4>
    {/* <img src={images.spoon} alt="spoon" /> */}
  </div>
);

