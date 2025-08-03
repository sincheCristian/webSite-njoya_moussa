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
      alert("Message envoyé avec succès !");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      alert("Erreur lors de l'envoi. Réessayez.");
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
          <label htmlFor="name">Nom</label>
          <input 
            type="text" name="name" value={formData.name}
            onChange={handleChange} required placeholder="Votre nom"
          />
          <label htmlFor="email">Email (Vérifier bien votre email avant d'envoyer)*</label>
          <input 
            type="email" name="email" value={formData.email}
            onChange={handleChange} required placeholder="Votre email"
          />
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" value={formData.message}
            onChange={handleChange} required placeholder="Votre message" rows="5"
          ></textarea>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Envoi en cours..." : "Envoyer"}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
