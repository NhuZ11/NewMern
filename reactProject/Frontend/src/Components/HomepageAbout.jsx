import React from "react";
import RacingCar from "../assets/racingcar.png";

const HomepageAbout = () => {
  return (
    <div>
      <div className="container mt-5 ml-8 mr-8">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={RacingCar}className="card-img-top hover" alt="Card image" />
              <div className="card-body">
                <h5 className="card-title">Racing Car</h5>
                <p className="card-text">
                  What do you like about cars?
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <h1 className="justify-content-center ">This is about us</h1>
            <p className="justify-content-center display-5 ">This section is about cars. What is your favourite car?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAbout;
    