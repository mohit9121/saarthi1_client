import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/NavBar.js";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = axios.post(
        "http://localhost:8082/api/users/send-email",
        formData
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="header">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">
            Our head office is located at:
            <br />
            123 Admin Block, IIT Ropar, Punjab, India
            <br />
            Email: 2020eeb1183@iitrpr.ac.in
            <br />
            Phone: +91 9754605008
          </p>
        </div>

        <div className="team-section">
          <h2 className="team-section-title">Our Team</h2>
          <p className="team-section-members-title">
            {" "}
            <b>ADVISOR: </b>Dr. Suman Kumar
          </p>
          <p className="team-section-members-title">
            <b>MEMBERS: </b>
            <br />
            Mohit Vyas <br />
            Anirudh Sharma <br />
            Tiya Jain <br />
            Tushar Sharma <br />
            Chirag Rathi <br />
            Aryan Bansal
          </p>
        </div>

        <div className="form-section">
          <h2 className="form-section-title">Contact Form</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="name">
              Name:
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label className="form-label" htmlFor="email">
              Email:
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label className="form-label" htmlFor="message">
              Message:
              <textarea
                className="form-input form-textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
