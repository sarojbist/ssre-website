import React from "react";
import ServicesCard from "../components/ServicesCard";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      {/* starting part - perfectly responsive */}
      <div className="font-for-all services-start">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="about-title bg-secondary text-center p-2 p-md-4 p-lg-5 fs-3 fs-md-1 ">
              Services
            </div>
          </div>
        </div>
      </div>
      <ServicesCard />
      <Footer />
    </div>
  );
};

export default Services;
