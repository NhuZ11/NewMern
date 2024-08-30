import React from "react";
import { useContext, useEffect, useReducer } from "react";
import BlackCar from "../assets/blackcar.png";
import blogcontext from "../context/blogs/BlogContext";

const Serviceitem = () => {
  const context = useContext(blogcontext);
  const {
    state: { cart, products },
    dispatch,
  } = context;
  console.log(products);
  return (
    <div className="container py-4">
      <div className="row">
        {products &&
          products.map((e) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <img src={BlackCar} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">Id: {e.id}</p>
                    <p className="card-text">Price: ${e.price}</p>
                    {cart && cart.some((p) => p.id == e.id) ? (
                      <button className="btn btn-danger" onClick={()=>{
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: e
                        })
                      }}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={()=>{
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: e
                        })
                      }}>Add to cart</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Serviceitem;
