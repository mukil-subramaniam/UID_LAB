import React from 'react';
import img1 from '../assets/img1.jpg';
import '../styles/About.css';
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          At Car Company Name, we are a passionate team dedicated to helping you find your perfect vehicle. With years of experience in the automotive industry, we prioritize exceptional service and customer satisfaction.
        </p>
        <p>
          Our mission is to offer a seamless car buying experience while providing expert advice and support throughout the entire process. We believe in building lasting relationships with our clients based on trust and reliability.
        </p>
        <p>Our core values are:</p>
        <ul>
          <li><span className="highlight">Integrity:</span> Upholding the highest ethical standards in all our interactions.</li>
          <li><span className="highlight">Excellence:</span> Committing to excellence in every aspect of our service.</li>
          <li><span className="highlight">Innovation:</span> Embracing innovative solutions to enhance the customer experience.</li>
        </ul>
        <center><h1>Our Team</h1></center>
        <img src={img1}  className="team-image" />
      </div>
    </section>
  );
}

export default About;
