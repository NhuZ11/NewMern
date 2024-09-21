import React from "react";
import Elon from "../../assets/elon.jpg"
import Pagani from "../../assets/pagani.jpg"
import Jyoti from "../../assets/saurabh.jpg"
import Enzo from "../../assets/enzo.jpg"
const Testimonial = () => {
  return (
    <div className="custom-bg d-flex align-items-center justify-content-center py-4">
      <div className="mx-5">
        <p className="text-dark display-6 text-center">Our Testimonials</p>
        <h1 className="display-6 d-flex justify-content-center  fw-bold">
          WHAT OUR CUSTOMER
        </h1>
        <h1 className="display-6 d-flex justify-content-center  fw-bold">
          SAYING ABOUT US
        </h1>
        <div className="row">
        <div className="col-md-3 pt-4">
          <div className="card">
          <img src={Elon} className="figure-img img-fluid rounded" alt="...."/>
            <div className="card-body">
              <h5 className="card-title">Elon Musk</h5>
              <h6 className="card-subtitle mb-2 text-muted">CEO, Tesla</h6>
              <p className="card-text">
                Great platform for renting car. Reliable partnership with Tesla
              </p>
           
            </div>
          </div>
        </div>

        <div className="col-md-3 pt-4">
          <div className="card">
          <img src={Pagani} className="figure-img img-fluid rounded" alt="...."/>
            <div className="card-body">
              <h5 className="card-title">Horacio Pagani</h5>
              <h6 className="card-subtitle mb-2 text-muted">Founder, Pagani</h6>
              <p className="card-text">
                Offers best deal for the cars. Highly recommended.
              </p>
             
            </div>
          </div>
        </div>

        <div className="col-md-3 pt-4">
          <div className="card">
          <img src={Jyoti} className="figure-img img-fluid rounded" alt="...."/>
            <div className="card-body">
              <h5 className="card-title">Saurabh Jyoti</h5>
              <h6 className="card-subtitle mb-2 text-muted">Chairperson, Jyoti Groups</h6>
              <p className="card-text">
               Best place for rental honda car. One can easily hire high quality vehicles here.
              </p>
            
            </div>
          </div>
        </div>

        <div className="col-md-3 pt-4">
          <div className="card">
          <img src={Enzo} className="figure-img img-fluid rounded" alt="...."/>
            <div className="card-body">
              <h5 className="card-title">Enzo Ferrari</h5>
              <h6 className="card-subtitle mb-2 text-muted">Founder, Ferrari</h6>
              <p className="card-text">
                Well conditioned rental cars. Highly recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Testimonial;
