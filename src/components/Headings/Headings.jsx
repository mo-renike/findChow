import React from "react";
//import images from "../../constants/images";

export const SubHeading = ({ title }) => (
  <div>
    <h4 className="subHeading">{title}</h4>
    {/* <img src={images.spoon} alt="spoon" /> */}
  </div>
);

export const Heading = ({ name }) => {
  <h1 className="heading">{name}</h1>;
};
