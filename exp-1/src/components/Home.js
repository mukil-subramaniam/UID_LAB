import React from 'react';
import '../styles/Home.css';
import Services from './Services';

function Home() {
  return (
    <section id="home" className="home">
      <div className="intro">
        <h2>Your Trusted Partner for Quality Cars</h2>
        <p>At Car Company Name we are dedicated to offering you the best selection of vehicles at unbeatable prices. Our commitment to customer satisfaction and quality service makes us the go-to choice for all your car needs.</p>
      </div>

      

      <div className="cta">
        <h3>Drive Your Dream Car Today!</h3>
        <p>Contact us to find your perfect vehicle, schedule a test drive, or learn more about our financing options.</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
}

export default Home;
