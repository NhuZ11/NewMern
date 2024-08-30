import React from "react";
import BlackCar from "../assets/blackcar 1.jpg";
import WhiteCar from "../assets/whitecar.jpg";
import YellowCar from "../assets/yellowcar.png";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <img
              src={BlackCar}
              className="d-block w-100"
              alt="Black Car"
              style={{ objectFit: "cover", height: "600px" }}
            />
          </div>
          <div
            className="carousel-item"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <img
              src={WhiteCar}
              className="d-block w-100"
              alt="White Car"
              style={{ objectFit: "cover", height: "600px" }}
            />
          </div>
          <div
            className="carousel-item"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <img
              src={YellowCar}
              className="d-block w-100"
              alt="Yellow Car"
              style={{ objectFit: "cover", height: "600px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
