import React from "react";
import { Carousel } from "react-responsive-carousel";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react";
import "./carousel.css";
const CarouselComponent = () => {
  const imgUrl = [
    './bg.png',
    './bg.png',
    './bg.png',
  ];
  return (
    <div className="carousel-container">
      <Carousel autoPlay showThumbs={false}>
        {imgUrl.map((url) => {
          return (
            <div className="carosel">
              <img src={url} />
              <span className="carousel-status">
                <p className="content-date">24th August 2021</p>
                <h1>Conference Name</h1>
                <h4>
                  Learn how to build a foundation of trust and security at
                  Microsoft's annual conference for our partner community
                </h4>
                <div className="content-btn-group">
                  <Stack horizontal>
                    <PrimaryButton text="Register Now" />
                    <DefaultButton text="Learn More" />
                  </Stack>
                </div>
              </span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
