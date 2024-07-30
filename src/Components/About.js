import React from "react";
import "./about.css"; 
const About = () => {
  return (
    
    <div className="about-page-container">
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Discover our journey, mission, and the values that drive us.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to provide the best mobile services, offering innovative
            solutions and exceptional customer care. Our mission is to keep you
            connected and make your life easier.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be the leading telecommunications provider, recognized for our
            commitment to quality and innovation. We envision a future where
            technology brings people closer and enriches lives.
          </p>
        </div>
      </div>

      <div className="call-to-action">
        <button>Contact Us</button>
      </div>
    </div>
    
  );
};

export default About;
