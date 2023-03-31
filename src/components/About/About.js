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
      SARTHI: A web application portal that aims to provide better market connectivity for dairy and poultry farmers by creating a streamlined and efficient marketplace for them to register their livestock products, such as milk, eggs, ghee, cheese, and more, and for buyers to directly connect with them. Our platform also includes a discussion forum and suggestion page, allowing farmers to share their experiences, exchange information, and receive valuable tips and advice for better managing their livestock.
      
      
      
      
      </p>
      <p className="about__description">
      Our goal is to enhance the process of buying and selling dairy and poultry products, which has been hindered by profiteering middlemen, such as commission agents, traders, and wholesalers, who take a major chunk of profit from farmers' produce, leaving very little for the farmers. To solve this problem, our framework allows consumers to directly contact or request specific products from the producer, with an option to rate a particular farm, which contributes to the producer's rating, thereby enabling other consumers to estimate the quality of the product of that producer.
      </p>
      <p className="about__description">
      Moreover, our app addresses the significant concern of lack of knowledge in the Indian livestock industry by providing helpful tips and suggestions based on scientific research and modern technologies about the maintenance and health of livestock, thereby increasing production. Our platform also provides a discussion forum for the producers, where they can discuss their problems among themselves. Our web-based application is a bridge between the seller and the consumer, with the aim of helping farmers grow their businesses, improve the quality of their products, and become their true friend.
      </p>
      <div className="about__testimonials">
        <div className="about__testimonial">
          <img src={avatar1} alt="Avatar" className="about__testimonial-avatar" />
          <div className="about__testimonial-text">
            <p>As a poultry farmer, I struggled to find reliable buyers who would pay a fair price for my eggs. But since I started using this farmer's portal, I've been able to connect with buyers easily and build long-term relationships. The discussion forum has also been a great resource for getting advice from other farmers and sharing my experiences. Overall, this platform has made my life as a farmer much easier and more profitable</p>
            <p className="about__testimonial-name">Ramlal, Dairy Farmer</p>
          </div>
        </div>
        <div className="about__testimonial">
          <img src={avatar2} alt="Avatar" className="about__testimonial-avatar" />
          <div className="about__testimonial-text">
            <p>I'm so grateful for this farmer's portal! I used to feel so isolated as a small-scale farmer, but now I have access to a supportive community of other farmers who share my passion for raising healthy livestock. The platform has also helped me improve the quality of my products by providing helpful tips and advice. And best of all, I can now sell my products directly to buyers and keep more of the profits for myself. Thank you, SARTHI, for creating this amazing platform!</p>
            <p className="about__testimonial-name">Basanti Bai, Poultry Farmer</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;