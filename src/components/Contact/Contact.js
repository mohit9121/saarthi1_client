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
          <p className="team-section-advisor"><b>Advisor: </b>Dr. Suman Kumar</p>
          <p className="team-section-members-title"> <b>Members: </b>
            Mohit Vyas
            Anirudh Sharma
            Tiya Jain
            Tushar Sharma
            Chirag Rathi
            Aryan Bansal
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;