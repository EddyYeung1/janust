import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image from "../images/image.jpg";
import amazon_logistics_center from "../images/amazon_logistics_center.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

export default function CustomCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={amazon_logistics_center}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
