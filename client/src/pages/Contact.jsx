import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import Footer from "../components/Footer";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validateName(name) {
    if (!name) {
      return "Please enter the name";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Invalid characters are used";
    } else if (name.trim().length <= 2) {
      return "Too Short Name";
    } else {
      return "";
    }
  }
  function handleNameChange(e) {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  }
  // email validation
  function validateEmail(email) {
    if (!email) {
      return "Email is required.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  }
  // phone handling
  const validatePhone = (phone) => {
    if (!phone) {
      return "Phone number is required.";
    }
    if (!/^\d+$/.test(phone)) {
      return "Phone number must contain only numbers.";
    }
    if (phone.length !== 10) {
      return "Phone number must be exactly 10 digits.";
    }
    return "";
  };
  function handlePhoneChange(e) {
    setPhone(e.target.value);
    setPhoneError(validatePhone(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* starting part - perfectly responsive */}
      <div className="font-for-all contact-start">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="about-title bg-secondary text-center p-sm-2 p-md-4 p-lg-5 fs-4 ">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      {/* contact divs */}
      <div class="container text-center contact-container px-3 mb-4">
        <div class="row flex-column flex-md-row">
          {/* left side */}
          <div class="col contact-left">
            <div className="contact-left-one">
              <div className="contact-title">
                <span className="icon-size">
                  <IoLocation />
                </span>
                <span>Head Office</span>
              </div>
              <div className="left-texts">
                <p className="secondary-text shiv-style">
                  Shiv shakti real estate
                </p>
                <p className="secondary-text">
                  D/11, Om Sai CHS Ltd, Gautam Nagar
                </p>
                <p className="secondary-text">MIDC Andheri(E), Mumbai 100093</p>
              </div>
            </div>
            {/* two */}
            <div className="contact-left-one">
              <div className="contact-title">
                <span className="icon-size">
                  <IoLocation />
                </span>
                <span>Head Office</span>
              </div>
              <div className="left-texts">
                <p className="secondary-text shiv-style">
                  Shiv shakti real estate
                </p>
                <p className="secondary-text">
                  D/11, Om Sai CHS Ltd, Gautam Nagar
                </p>
                <p className="secondary-text">MIDC Andheri(E), Mumbai 100093</p>
              </div>
            </div>
            {/* three */}
            <div className="contact-left-one">
              <div className="contact-title">
                <span className="icon-size">
                  <IoLocation />
                </span>
                <span>Head Office</span>
              </div>
              <div className="left-texts">
                <p className="secondary-text shiv-style">
                  Shiv shakti real estate
                </p>
                <p className="secondary-text">
                  D/11, Om Sai CHS Ltd, Gautam Nagar
                </p>
                <p className="secondary-text">MIDC Andheri(E), Mumbai 100093</p>
              </div>
            </div>
            {/*  */}
          </div>

          <div class="col contact-right">
            {/* creating form */}
            <form onSubmit={handleSubmit}>
              {/* name of form */}
              <div class="mb-3 mt-3">
                <label class="form-label text-start d-block">Name</label>
                <input
                  type="text"
                  className={`form-control ${nameError ? "input-error" : ""}`}
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              {nameError && <p class="show-error">{nameError}</p>}
              {/* Email */}
              <div class="mb-3 mt-3">
                <label for="email" class="form-label d-block text-start">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError ? "input-error" : ""}`}
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              {emailError && <p class="show-error">{emailError}</p>}

              {/* phone */}

              <div className="mb-3 mt-3">
                <label for="phone" className="form-label text-start d-block">
                  Phone
                </label>
                <input
                  type="tel"
                  className={`form-control ${phoneError ? "input-error" : ""}`}
                  id="phone"
                  placeholder="Enter phone number"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              {phoneError && <p class="show-error">{phoneError}</p>}

              {/* message */}
              <label for="comment" className="form-label text-start d-block">
                Message
              </label>
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                name="text"
              ></textarea>
              {/* button */}
              <button type="submit" className="btn btn-primary mt-3 d-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ContactUs;
