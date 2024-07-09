import React from "react";
import { FaEye } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { MdOutlineDiamond } from "react-icons/md";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      {/* starting part */}
      <div className="about-start">
        <div className="row justify-content-center align-items-center col-12">
          <div className="about-title bg-secondary text-center p-2 p-md-4 fs-2">
            About Us
          </div>
        </div>
      </div>
      {/* welcome part */}
      <div className="container font-for-all about-welcome">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center about-welcome-res p-2 p-md-4 fs-3 fs-md-4">
            Welcome to Corp Reality Builders and Developers
          </div>
        </div>
      </div>
      {/* image description section */}
      <div className="container">
        <div className="row">
          {/* Left div for image */}
          <div className="col-md-6">
            <img
              src="../assets/img/building-card.jpg"
              alt="Image of About"
              className="about-image img-fluid"
            />
          </div>
          {/* Right div for text */}
          <div className="col-md-6 p-3">
            <div className="text-start p-0">
              <p>
                SHIV SHAKTI REAL ESTATE is one of the leading Real Estate
                Consultancy firms in the field of real estate in Mumbai. Shiv
                Shakti Real Estate was established in the Year 1991 by Mr. Azad
                Pandey with an objective to provide professional consultancy
                services in the field of real estate to its clients throughout
                Mumbai.
              </p>
              <br></br>
              <p>
                Shiv Shakti real estate assists each client through every
                aspects of the transaction process. We work to ensure that
                client is comfortable with the process and more importantly,
                that that client’s goal is met or exceeded. We interface
                effectively with property owners, MNCs, Developers, Agents and
                others.
              </p>
              <br></br>
              <p>
                Shiv Shakti real estate offers you a wide range of commercial
                properties in your specific budget & location and it will be
                executed with professionalism. Shiv Shakti real estates act for
                Multinationals Companies, Financial institutes, Industrial
                Businesses and private individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div className="container text-center card-section">
        <div className="row flex-column flex-md-row ">
          <div className="col">
            <div className="card card-margin card-same-height">
              <div className="about-icons icon-paddings">
                <FaEye />
              </div>
              <div className="card-body">
                <h3 className="card-title">Vision</h3>
                <p className="card-text text-start">
                  Our vision at Shiv Shakti Real Estate is to be the foremost
                  consultancy firm in Mumbai's real estate sector, renowned for
                  our unwavering commitment to professionalism, integrity, and
                  client satisfaction. Since our establishment in 1991 by Mr.
                  Azad Pandey, we have dedicated ourselves to providing expert
                  consultancy services tailored to meet the diverse needs of our
                  clients. We aspire to guide each client seamlessly through
                  every aspect of the real estate transaction process, ensuring
                  their comfort and exceeding their goals. By fostering
                  effective communication and collaboration with property
                  owners, multinational corporations, developers, agents, and
                  other stakeholders, we strive to facilitate successful and
                  mutually beneficial real estate transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-margin card-same-height">
              <div className="about-icons icon-paddings">
                <FiTarget />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mission</h3>
                <p className="card-text text-start">
                  Shiv Shakti real estate assists each client through every
                  aspects of the transaction process. We work to ensure that
                  client is comfortable with the process and more importantly,
                  that that client’s goal is met or exceeded. We interface
                  effectively with property owners, MNCs, Developers, Agents and
                  others.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-margin card-same-height">
              <div className="about-icons icon-paddings">
                <MdOutlineDiamond />
              </div>
              <div className="card-body">
                <h3 className="card-title">Values</h3>
                <p className="card-text text-start">
                  Shiv Shakti real estate offers you a wide range of commercial
                  properties in your specific budget & location and it will be
                  executed with professionalism. Shiv Shakti real estates act
                  for Multinationals Companies, Financial institutes, Industrial
                  Businesses and private individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
