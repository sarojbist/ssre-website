import React from "react";
// import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Real Estate
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/properties">
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-success me-2">
                  List Your Property
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-danger">
                  Admin Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
