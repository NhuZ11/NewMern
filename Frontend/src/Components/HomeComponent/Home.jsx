import React from "react";
import Carousel from "../Carousel";
import HomepageAbout from "./HomepageAbout";
import Serviceitem from "../Serviceitem";
import Footer from "./Footer";
import { ReactTyped } from "react-typed";
import Features from "./Features";
import Service from "./Services";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import HomeShowProduct from "./HomeShowProduct";

const Home = () => {
  return (
    <div>
      <div className="hero-section d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="display-2 fw-bold"><ReactTyped strings={["Welcome to Car Rental","Best Service in the Town."]} typeSpeed={120} backSpeed={100} loop/></h1>
          <h1 className="display-2 fw-bold text-uppercase text-muted">RENTAL CARS</h1>
          <p className="lead">Get <span className="display-4 text-danger font-weight-bold">Fast</span> Get <span className="display-4 text-danger font-weight-bold">Furious</span>.</p>
          <a href="#learn-more" className="btn btn-dark btn-lg">
            Learn More
          </a>
        </div>
      </div>
      {/* <Carousel /> */}
      <Features />
      
      <HomepageAbout />
      {/* <Serviceitem /> */}
      <Service />
      <HomeShowProduct />
      <Contact /> 
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
