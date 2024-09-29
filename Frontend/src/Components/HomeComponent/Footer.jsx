import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted bg-dark">

        {/* Main Footer Content */}
        <section>
          <div className="container text-center text-md-start pt-5">
            <div className="row ">
              {/* Column 1 */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Cars
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              {/* Column 2 */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset underline">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    Laravel
                  </a>
                </p>
              </div>

              {/* Column 3 */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset underline">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset underline">
                    Help
                  </a>
                </p>
              </div>

              {/* Column 4 */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 m-1">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Kathmandu
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Social Media Section */}
        <section className="d-flex justify-content-center  border-bottom p-3">
          <div>
            <a href="#" className="me-4 text-reset no-underline">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Copyright Section */}
        <div className="text-center p-4">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">
            nhuz.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
