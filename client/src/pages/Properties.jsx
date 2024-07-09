import React from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";

const Properties = () => {
  return (
    <div>
      <div className="container">
        <div className="buttons d-flex gap-3 flex-wrap justify-content-center mt-3">
          <button type="button" className="btn btn-primary fix-btn">
            Commercial
          </button>
          <button type="button" className="btn btn-primary fix-btn">
            Residential
          </button>
          <button type="button" className="btn btn-primary fix-btn">
            Industrial
          </button>
          <button type="button" className="btn btn-primary fix-btn">
            Projects
          </button>
        </div>

        {/* searching part */}
        <div className="search-bar d-flex justify-content-center">
          <select className="btn btn-primary rounded-start" id="buy-or-rent">
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
          <input
            type="text"
            className="form-control none-border"
            placeholder="Search"
          />
          <button
            type="button"
            className="rounded-end btn btn-primary d-flex align-items-center"
          >
            {<FaSearch />}
            Search
          </button>
        </div>
      </div>
      {/* Card is done, now we can just map with the help of api. */}
      <div className="prop-middle">
        <div className="shadow prop-card d-flex flex-column flex-md-row my-3 p-1">
          {/* left */}
          <div className="prop-card-left"></div>
          <img
            className="prop-card-img"
            src="https://vivaansu.com/admin/uploads/662ca5125434e2.11769342.jpg"
            alt="Property"
          />

          {/* right */}
          <div className="prop-card-right text-start p-3">
            <h5 className="prop-card-title">Home 6</h5>
            <h6>Marol</h6>
            <div
              className="d-flex justify-content-between align-items-center my-2"
              style={{ width: "100%" }}
            >
              <h6>2bhk - 5cr</h6>
              <h6>2bhk - 5cr</h6>
              <h6>2bhk - 5cr</h6>
            </div>
            <div
              className="d-flex justify-content-between align-items-center my-2"
              style={{ width: "100%" }}
            >
              <h6>Area - (Built-up): 1616 Sq ft</h6>
              <h6>Buy: 10</h6>
            </div>
            <p>
              2 bhk converted into 3 bhk, semi furnished office for sale in old
              nagardas road Andheri east near station without car parking, Jain
              temple in society. For visit kindly contact with us.
            </p>
            <div className="d-flex justify-content-end">
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
