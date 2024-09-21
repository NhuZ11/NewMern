import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import blogContext from '../context/blogs/BlogContext';

const Navbar = (props) => {
  const context = useContext(blogContext);
  const {
    state: { cart },
  } = context;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CarRental
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/card">
                  Card
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/reducerProduct">
                      Reducer (Show Product)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/addproduct">
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/showproduct">
                      Show all Product
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./cartitems">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    <FaShoppingCart />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
              </li>
              
            </ul>

            <button className="btn btn-primary" onClick={props.toggleTheme}>
              {props.text}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
