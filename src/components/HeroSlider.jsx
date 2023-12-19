import React, { useState } from "react";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import left from "../images/left-arrow.png";
import right from "../images/arrow-point-to-right.png";

// slider configuration
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 1;
  const goNext = () => {
    if (parallaxSwiper !== null) {
      parallaxSwiper.slideNext();
    }
  };
  
  const goPrev = () => {
    if (parallaxSwiper !== null) {
      parallaxSwiper.slidePrev();
    }
  };
  return (
    <>
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image1} alt="image1"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image2} alt="image2"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image3} alt="image3"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image4} alt="image3"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image5} alt="image3"></img>
          </div>
        </div>
      </Swiper>
      <img src={left} onClick={goPrev} className="navigation-left" alt="" />
      <img src={right} onClick={goNext} className="navigation-right" alt="" />
      <img
        className="downArrow"
        src="https://i.postimg.cc/nrGDzKhG/scroll-down-mouse.webp"
        alt=""
      />
    </>
  );
};

export default HeroSlider;
