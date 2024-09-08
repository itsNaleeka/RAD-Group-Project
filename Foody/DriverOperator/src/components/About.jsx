import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">    
      <section className="section restaurant">
        <h2>Our Restaurant</h2>
        <p>
          Welcome to [Restaurant Name], where we offer a delightful dining experience with a focus on quality and taste. Our restaurant is known for its welcoming atmosphere and exceptional service.
        </p>
      </section>
      
      <section className="section driver-manager">
        <h2>Chances for driver Manager</h2>
        <p>
          We are always looking for enthusiastic and dedicated individuals to join our team as Driver Managers. If you have a passion for logistics and management, consider applying for a position with us.
        </p>
      </section>
    </div>
  );
};

export default About;
