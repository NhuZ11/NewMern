import React, { useContext } from "react";
import blogContext from "../context/blogs/BlogContext";
import BlackCar from "../assets/blackcar.png";
import { MdDelete } from "react-icons/md";

const Cartitems = () => {
  const context = useContext(blogContext);
  const { state: { cart }, dispatch } = context;  // Ensure dispatch is available
  const Total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="container home">
      <div className="productcontainer-cart">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="list-group list-unstyled">
            <li className="list-group-items">
              <div className="row font-weight-bold">
                <div className="col-md-2">Image</div>
                <div className="col-md-2">Product Name</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Description</div>
                <div className="col-md-2">Quantity</div>
                <div className="col-md-2">Remove</div>
              </div>
            </li>
            {cart.map((prod) => (
              <li className="list-group-items mt-3" key={prod.id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid rounded"
                      src={BlackCar}
                      alt={prod.name}
                    />
                  </div>
                  <div className="col-md-2">{prod.title}</div>
                  <div className="col-md-2">{prod.price}</div>
                  <div className="col-md-2">{prod.description}</div>
                  <div className="col-md-2">
                    <select
                      value={prod.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        });
                      }}
                      className="form-control"
                    >
                      {[...Array(prod.instock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="filter summary">
        <div className="title">Total items: ({cart.length})</div>
        <h4>Total: {Total}</h4>
      </div>
    </div>
  );
};

export default Cartitems;
