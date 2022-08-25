import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image12 from "../images/image12.jpg";
import image11 from "../images/image11.jpg";
import image from "../images/image.jpg";
import amazon_logistics_center from "../images/amazon_logistics_center.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

export default function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={amazon_logistics_center}
          alt="amazon logistics center"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image6} alt="eigth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image7} alt="ninth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image8} alt="tenth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image9} alt="eleventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image12} alt="twelth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image11} alt="thirteen slide" />
      </Carousel.Item>
    </Carousel>
  );
}
