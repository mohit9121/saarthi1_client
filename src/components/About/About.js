import React from 'react';
import avatar1 from '../../assets/testimonial1.jpg';
import avatar2 from '../../assets/testimonial2.jpg';
import './About.css'
import Navbar from '../Navbar/NavBar.js';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <h2 className="about__title">About Our App</h2>
      <p className="about__description">
        Our app is designed to provide better market connectivity for dairy and poultry farmers. With our platform, farmers can register their livestock products, such as milk, eggs, ghee, cheese, and more, and buyers can directly connect with them. We aim to create a streamlined and efficient marketplace that benefits both farmers and buyers.
      </p>
      <p className="about__description">
        In addition to connecting farmers and buyers, our app also provides a discussion forum and a suggestion page. The discussion forum allows farmers to share their experiences and exchange information with one another, while the suggestion page provides farmers with valuable tips and advice for better managing their livestock.
      </p>
      <p className="about__description">
        Our goal is to create a comprehensive platform that helps farmers grow their businesses and improve the quality of their products. We believe that by connecting farmers with buyers and providing a supportive community, we can help make a positive impact in the livestock industry.
      </p>
      <div className="about__testimonials">
        <div className="about__testimonial">
          <img src={avatar1} alt="Avatar" className="about__testimonial-avatar" />
          <div className="about__testimonial-text">
            <p>This app has made it easier for me to connect with buyers for my dairy products. I highly recommend it to other farmers.</p>
            <p className="about__testimonial-name">Ramlal, Dairy Farmer</p>
          </div>
        </div>
        <div className="about__testimonial">
          <img src={avatar2} alt="Avatar" className="about__testimonial-avatar" />
          <div className="about__testimonial-text">
            <p>I love the discussion forum feature of this app. It has helped me get answers to all my questions about livestock management.</p>
            <p className="about__testimonial-name">Basanti Bai, Poultry Farmer</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;