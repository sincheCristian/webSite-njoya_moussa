import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      'service_9qvt4sm',
      'template_2juz7sy',
      formData,
      'UUVINaWy0LUDtZGDZ'
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      alert("Error sending message. Please try again.");
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contactez Moi</h2>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name">Name</label>
          <input 
            type="text" name="name" value={formData.name}
            onChange={handleChange} required placeholder="Your Name"
          />
          <label htmlFor="email">Email (Make sure to check your email carefully before sending.)*</label>
          <input 
            type="email" name="email" value={formData.email}
            onChange={handleChange} required placeholder="Your email"
          />
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" value={formData.message}
            onChange={handleChange} required placeholder="Your message" rows="5"
          ></textarea>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
