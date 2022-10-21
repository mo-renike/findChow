import React from "react";
import "./BannerSlider.scss";
import slider1 from "../../images/banner-slider-1.png";

export const BannerSlider = ({ images }) => {
  return (
    <div className="slider">
      <div className="slider__container">
        {/* <div className="slider__circle--first" /> */}
        <img src={slider1} alt="" />
        {/* <div className="slider__circle--second" /> */}
      </div>
    </div>
  );
};
