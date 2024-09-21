import React from "react";
import Car1 from '../../assets/Car1.png'
import Car2 from '../../assets/Car2.png'
import Car3 from '../../assets/Car3.png'
import Car4 from '../../assets/Car4.png'

const Service = () => {
  return (
    <div className="custom-bg py-5">
      <h4 className="d-flex justify-content-center  text-dark">
        OUR SERVICES
      </h4>
      <h1 className="display-6 d-flex justify-content-center pt-3 fw-bold">
        RENTING SERVICES FOR
      </h1>
      <h1 className="display-6 d-flex justify-content-center mt-4 fw-bold">
        VARIOUS CARS
      </h1>
      <div className="row mx-5 mt-3">
        <div className="col-md-4 ">
          <div className="card p-4">
            <img src={Car1} className="card-img-top" alt="Maintainence" />
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">
                RECONDITIONING
              </h5>
              <p className="card-text">
                We recondition old cars and provide them in rent as new one.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark mt-4">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
          <img src={Car2} className="card-img-top" alt="Service" />
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">
                24 / 7 SERVICE
              </h5>
              <p className="card-text ">
              We are available at your service all the time. We provide service all the time.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark mt-4">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card p-4">
          <img src={Car4} className="card-img-top" alt="Service" />
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">
                CUSTOMIZATION
              </h5>
              <p className="card-text">
                We also customize your car as per your need.
              </p>
              <div className="d-flex justify-content-center pb-4">
                <button className="btn btn-dark mt-4 ">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
