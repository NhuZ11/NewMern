import React from "react";


const Contact = () => {
  return (
    <div>
      <div className="background-contact-image">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-3 ">
            <div className="container border border-2 m-5 p-0 form-background">
              <div className="bg-dark d-flex justify-content-center">
                <h1 className="text-white">Contact Us</h1>
              </div>
              <div className="px-3">
                <form>
                  <div className="form-group pt-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group pt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group pt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="form-group py-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Feedback"
                    ></textarea>
                  </div>
                  <div className="pb-2 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
