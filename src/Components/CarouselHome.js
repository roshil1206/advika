import React from "react";
import image1 from "../images/01_169.jpg";
import image2 from "../images/02.jpg";
import image3 from "../images/03.jpg";
import Carousel from "react-bootstrap/Carousel";

const style = {
  height: "100vh",
};

function CarouselHome() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="bannerContainer">
        <img
          className="d-block w-100"
          src={image2}
          style={style}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          style={style}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          style={style}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
