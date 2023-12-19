import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
const ParallaxSlider = () => {
  const intensity=200
  return (
    <div>
   
      <Parallax strength={intensity} bgImage={image2}>
        <div className="parallax-container"></div>
      </Parallax>
      <Parallax strength={intensity} bgImage={image3}>
        <div className="parallax-container"></div>
      </Parallax>
      <Parallax strength={intensity} bgImage={image4}>
        <div className="parallax-container"></div>
      </Parallax>
      <Parallax strength={intensity} bgImage={image5}>
        <div className="parallax-container"></div>
      </Parallax>
    </div>
  );
};

export default ParallaxSlider;
