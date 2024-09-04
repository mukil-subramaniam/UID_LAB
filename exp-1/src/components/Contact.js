import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions about our services, want to schedule a test drive, or need assistance, feel free to reach out using the contact form below or through our contact information.</p>
        
        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <p><strong>Email:</strong> car@gmail.com</p>
          <p><strong>Phone:</strong> +91 9846457217</p>
          <p><strong>Address:</strong> Chennai Annar Nagar</p>
        </div>
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
