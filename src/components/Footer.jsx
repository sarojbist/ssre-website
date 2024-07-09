import React from "react";
import { RiBankFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer-bg">
        <div className="container my-footer text-start p-1 p-md-3">
          <div className="row">
            {/* first part */}
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <img
                  className="img-logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-etD5rHatCwQID7NWyfKaGmxJd0RKK0cHvA&s"
                  alt="logo"
                />
              </div>
              <p>
                REAL ESTATE is one of the leading Real Estate Consultancy firms
                in the field of real estate in Mumbai. Real Estate was
                established in the Year 1991 with an objective to provide
                professional consultancy services in the field of real estate to
                its clients throughout Mumbai.
              </p>
              <div>
                <h4 className="">We Accept </h4>
                <div className="d-flex footer-first-icons">
                  <RiBankFill />
                  <RiBankFill />
                  <RiBankFill />
                  <RiBankFill />
                </div>
              </div>
            </div>

            {/* second part */}
            <div className="col-12 col-md-6 col-lg-3">
              <ul className="d-flex flex-column gap-3 list-unstyled">
                <li>
                  <p href="#" className="text-white text-decoration-none">
                    Quick Links
                  </p>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-white text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white text-decoration-none"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/properties"
                    className="text-white text-decoration-none"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white text-decoration-none"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* third part */}
            <div className="col-12 col-md-6 col-lg-3">
              <ul className="d-flex flex-column gap-3 list-unstyled">
                <li>
                  <p className="text-white text-decoration-none">Services</p>
                </li>
                <li>
                  <Link to="./" className="text-white text-decoration-none">
                    Rent
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Outright / Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Seller / Buyer Representation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Renting and selling of Commercial Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Renting and selling of Industrial Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Renting and selling of Residential Properties
                  </a>
                </li>
              </ul>
            </div>
            {/* fourth part */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column gap-1">
                <p>Contact Details</p>
                <p> Chetan -8108844025 </p>
                <p>Mail - info@vivaansu.com</p>
                <p>Follow us on</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
