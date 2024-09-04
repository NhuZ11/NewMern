import React from "react";
import Carousel from "./Carousel";
import HomepageAbout from "./HomepageAbout";
import Serviceitem from "./Serviceitem";
import Footer from "./Footer";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div>
      <div className="hero-section d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="display-2"><ReactTyped strings={["Welcome to Car Rental","Best Service in the Town."]} typeSpeed={120} backSpeed={100} loop/></h1>
          <h1 className="display-2 font-weight-bold text-uppercase text-danger">CRAZYCARS</h1>
          <p className="lead">Get <span className="display-4 text-danger font-weight-bold">Fast</span> Get <span className="display-4 text-danger font-weight-bold">Furious</span>.</p>
          <a href="#learn-more" className="btn btn-success btn-lg">
            Learn More
          </a>
        </div>
      </div>
      {/* <Carousel /> */}
      <HomepageAbout />
      <Serviceitem />
      <Footer />
    </div>
  );
};

export default Home;
