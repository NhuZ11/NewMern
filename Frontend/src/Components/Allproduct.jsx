import React, { useContext, useEffect } from "react";
import blogcontext from "../context/blogs/BlogContext";
const Allproduct = () => {
  const context = useContext(blogcontext);
  const { product, fetchProduct } = context;

  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container py-4">
      <div className="row">
        {product &&
          product.map((e, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img
                    src={`http://localhost:5000/uploads/${e.images[0]}`} // Use your correct base URL
                    className="card-img-top"
                    alt={`Image of ${e.title}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.description}</p>
                    <p className="card-text">Price: ${e.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Allproduct;
