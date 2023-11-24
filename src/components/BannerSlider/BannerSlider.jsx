import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlider.scss";

import slide1 from "../../images/amala1.jpeg";
import slide2 from "../../images/amala2.jpeg";
import slide3 from "../../images/amala5.jpeg";

import calabar1 from "../../images/calabar-11.jpeg"
import calabar2 from "../../images/calabar.jpg"
import calabar3 from "../../images/calabar-3.jpg"

import chinese1 from "../../images/chinese-1.jpg"
import chinese2 from "../../images/chinese.jpg"
import chinese3 from "../../images/chinese-3.jpeg"



const BannerSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const { foodType } = useContext(AppContext);

  // return the appropriate slides based on foodType
  const slides = () => {
    if (foodType === "amala") {
      return [slide1, slide2, slide3];
    } else if (foodType === "calabar%2Ckitchen") {
      return [calabar1, calabar2, calabar3];
    } else if (foodType === "chinese") {
      return [chinese1, chinese2, chinese3];
    }
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {slides().map((slide, index) => {
          return (
            <div className='slider__image' key={index}>
              <img src={slide} alt={foodType} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BannerSlider