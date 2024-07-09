import React from "react";
import "../js/services-card";
const ServicesCard = () => {
  return (
    <div>
      {/* second part of web page - full responsive */}
      <div className="blue-bg">
        <div className="container font-for-all services-welcome">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-start services-font-size font-weight-bold p-3 p-md-4 p-lg-5 fs-2">
              Real Estate Services
            </div>
          </div>
          {/* card section - perfectly responsive*/}
          <div className="row justify-content-between align-items-center flex-wrap all-cards">
            <div className="d-flex justify-content-center col-12 col-md-6 col-xl-3 mb-4  services-card mx-auto">
              <div className="card single-card">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title fs-3 custom-bold">Commercial</h5>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 col-md-6 col-xl-3 mb-4  services-card mx-auto">
              <div className="card single-card ">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title fs-3 custom-bold">Commercial</h5>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 col-md-6 col-xl-3 mb-4 services-card mx-auto">
              <div className="card single-card">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title fs-3 custom-bold">Commercial</h5>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 col-md-6 col-xl-3 mb-4 services-card mx-auto">
              <div className="card single-card">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title fs-3 custom-bold">Commercial</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
