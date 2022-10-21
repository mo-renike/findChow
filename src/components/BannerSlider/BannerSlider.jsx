import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlider.scss";

import slide1 from "../../images/banner-slider-1.png";
import slide2 from "../../images/banner-slider-2.png";
import slide3 from "../../images/banner-slider-3.png";

const slides = [slide1, slide2, slide3];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                <img src={slide} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
