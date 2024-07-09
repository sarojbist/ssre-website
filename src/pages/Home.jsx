import React, { useState } from 'react';
import Footer from '../components/Footer';
import { FaSearch } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Properties from '../js/properties';
import ServicesCard from '../components/ServicesCard';
import Testimonials from '../js/testimonials';
import { ImUserTie } from "react-icons/im"; 

const Home = () => {
  const [home, setHome] = useState(Properties); 
  const [data, setData] = useState(Testimonials);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var clientSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  var testosettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>

      {/* Home hero part */}
      <div className="home-hero">
        <div className="hero-img py-2 py-md-4 py-lg-5">
          <div className="hero-flex-column-gap gap-1">
            <h2 className="heading-one">SHIV SHAKTI REAL ESTATE</h2>
            <h2 className="heading-two mb-4">Find a home you'll love</h2>
          </div>
          {/* I will handle the onclick bg color change later using JS */}
          <div className="buttons d-flex gap-3 flex-wrap justify-content-center">
            <button type="button" className="btn-trans">
              Commercial
            </button>
            <button type="button" className="btn-trans">
              Residential
            </button>
            <button type="button" className="btn-trans">
              Industrial
            </button>
            <button type="button" className="btn-trans">
              Projects
            </button>
          </div>

          {/* Searching part */}
          <div className="search-bar d-flex justify-content-center">
            <select className="btn btn-primary rounded-start" id="buy-or-rent">
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
            <input
              type="text"
              className="form-control none-border"
              placeholder="Enter your search query"
            />
            <button
              type="button"
              className="rounded-end btn btn-primary d-flex align-items-center"
            >
              <FaSearch />
              Search
            </button>
          </div>
        </div>
        {/* Home hero ending */}

        {/* Home properties section */}
        <div className="home-properties-main-div">
          <div className="container">
            <div className="col-12 text-start p-3 p-md-4 p-lg-4 fs-3 fs-md-4 home-p-heading">
              Properties Suitable for Your Business
            </div>
            {/* Slider with cards */}
            <Slider {...settings}>
              {home.map((item) => (
                <div key={item.id}>
                  <div className="card text-start home-properties">
                    <div className="card-top">
                      <div className="card-shape">Property ID: {item.id}</div>
                      <div className="card-shape">{item.type}</div>
                    </div>
                    <img src={item.img} className="card-img-top" alt="Property" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.address}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                          <span className="fw-bold">Area: </span>
                          {item.area}
                        </p>
                        <a href="#" className="btn btn-primary">
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* home properties ending section */}

        {/* home services */}
        <ServicesCard />
        {/* home services ending */}


        {/* home client section */}
        <div className="container home-client">
      <div className="col-12 text-start fs-3 fs-md-2 p-1 p-md-2 home-client-head">
        Our Clients
      </div>

      <Slider {...clientSettings}>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 1"
          />
        </div>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 2"
          />
        </div>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 3"
          />
        </div>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 4"
          />
        </div>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 5"
          />
        </div>
        <div className="slider-image">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Client 6"
          />
        </div>
      </Slider>
    </div>
        {/* home client ending*/}


        {/* home testonomials starting */}
        <div className="container testimonial">
      <div className="col-12 text-start p-3 p-md-4 p-lg-4 fs-5 fs-md-4">
        Testimonial
      </div>
      {/* cards */}
      <Slider {...testosettings}>
        {data.map((item, index) => (
          <div className="testi-card p-2 col-3">
            <div className="t-backside">
              <div className="t-frontside " key={index}>
                <icon>
                  <ImUserTie />
                </icon>
                <h5 className="card-title fw-bold ">{item.name}</h5>
                <p className="card-text text-start ">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        {/* home testonomials ending */}

        {/* footer part */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
