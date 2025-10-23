import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    setStatus('Sending...');

    const SERVICE_ID = 'service_wami19';
    const TEMPLATE_ID = 'template_bex9hi2';
    const PUBLIC_KEY = 'MuO9a9I8KlglXH_F_';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully! 🎉');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again later.');
      });
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3797446960475!2d124.43066587401925!3d10.934660456257227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a81f6fff8a8bd5%3A0x2b946114ce8aee21!2sVisayas%20State%20University%20-%20Isabel!5e0!3m2!1sen!2sph!4v1761229709732!5m2!1sen!2sph";
  
  return (
    <div className="inside-box" id="contact-section">
      <h1>CONTACT</h1>
      <div className="contact-grid-container">        
        <div className="contact-form-column">
          <div className="info-card">
            <h2>CONTACT INFO</h2>
            <b>Address:</b> Visayas State University, Marvel, Isabel, Leyte <br />
            <b>Mobile Number:</b> +639171269250 <br />
            <b>E-mail Address:</b> william.mancao@vsu.edu.ph <br />
          </div>
          <div className="form-card">
            <h2>SEND A MESSAGE</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="name" required /> 
              <label>E-mail</label>
              <input type="text" name="email" required />
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
              <button type="submit">SEND</button>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{status}</p>
            </form>
          </div>
        </div>
        <div className="contact-map-column">
          <h2>VISIT</h2>
          <iframe
            src={mapUrl}
            title="Location Map"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;