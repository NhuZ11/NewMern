import React from "react";
import { MdAvTimer } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";
import { FaHome, FaStar, FaUsers } from "react-icons/fa";
import { MdVerified, MdOutlineSecurity } from "react-icons/md";
import AboutImg from "../assets/blackcar.png";

const About = () => {
  return (
    <div className="about-section py-5">
      <div className=" d-flex align-items-center justify-content-center mx-4">
        <div className="row w-100 mx-5">
          <div className="col-md-7 pe-5">
            <p className="text-secondary display-6">About Our Service</p>
            <h1 className="text-dark fw-bold mb-4">Your Trusted Car Rental Partner</h1>
            <p>
              Discover the best car rental services in the city. We offer a wide
              range of vehicles, from luxury to economy, ensuring every journey
              is comfortable and affordable. Whether you need a car for a family
              vacation or a business trip, we have you covered.
            </p>

            <div className="row w-100 mt-5">
              <div className="col-md-6">
                <p>
                  <span>
                    <MdAvTimer size={25} color="dark" />
                  </span>{" "}
                  Reconditioned Vehicles
                </p>
                <p>
                  <span>
                    <FaHome size={25} color="dark" />
                  </span>{" "}
                  Perfect for Family
                </p>
                <p>
                  <span>
                    <FaUsers size={25} color="dark" />
                  </span>{" "}
                  24/7 Customer Support
                </p>
                <button className="btn btn-dark mt-4">Learn More</button>
              </div>
              <div className="col-md-6">
                <p>
                  <span>
                    <AiFillCalculator size={25} color="dark" />
                  </span>{" "}
                  Affordable Pricing
                </p>
                <p>
                  <span>
                    <MdVerified size={25} color="dark" />
                  </span>{" "}
                  Fully Insured
                </p>
                <p>
                  <span>
                    <MdOutlineSecurity size={25} color="dark" />
                  </span>{" "}
                  Safety & Security
                </p>

                <p>
                  <span className="display-5 fw-bold text-dark">20+</span>{" "}
                  <br /> years of Excellence
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="about-image">
              <img src={AboutImg} alt="Car" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-4">
            <div className="icon-box">
              <FaStar size={50} className="text-primary mb-3" />
              <h5>Top Rated Services</h5>
              <p>We are rated 5 stars by thousands of customers for our quality and commitment.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box">
              <MdVerified size={50} className="text-success mb-3" />
              <h5>Verified Cars</h5>
              <p>All our cars are well-maintained and go through regular safety inspections.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box">
              <FaUsers size={50} className="text-info mb-3" />
              <h5>Dedicated Support</h5>
              <p>Our team is available 24/7 to assist you with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
