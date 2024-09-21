import React from "react";
import { MdAvTimer } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import AboutImg from "../../assets/blackcar.png";

const HomepageAbout = () => {
  return (
    <div>
      <div className="background-image d-flex align-items-center justify-content-center">
        <div className="row w-100 mx-5">
          <div className="col-md-8 pe-5">
            <p className="text-dark display-6">About Rental Cars</p>
            <h1>CAR RENTING SERVICE</h1>
            <p>
              Reliable and perfect place for renting well conditioned cars in
              the town. Rent all sorts of cars in affordable cost.
            </p>

            <p>
              Our rental service allows to rent car of all varieties, sports to
              classic. You can find it in our place. We have well conditioned
              and insured car in affordable cost.
            </p>

            <div className="row w-100 mt-5">
              <div className="col-md-6">
                <p>
                  <span>
                    <MdAvTimer size={25} color="dark" />
                  </span>{" "}
                  Reconditioned
                </p>
                <p>
                  <span>
                    <FaHome size={25} color="dark" />
                  </span>{" "}
                  Family Purpose
                </p>
                <button className="btn btn-dark mt-4">READ MORE</button>
              </div>
              <div className="col-md-6">
                <p>
                  <span>
                    <AiFillCalculator size={25} color="dark" />
                  </span>{" "}
                  Affordable
                </p>
                <p>
                  <span>
                    <MdVerified size={25} color="dark" />
                  </span>{" "}
                  Insurance
                </p>

                <p>
                  <span className="display-5 fw-bold text-dark">15+</span>{" "}
                  <br /> years of moving service
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <div className="about-image">
              <img src={AboutImg} alt="Card image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAbout;
