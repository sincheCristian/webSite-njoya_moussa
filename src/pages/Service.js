import React, { useState, useRef } from 'react';
import './Service.css';

const servicesData = [
    {
      id: 1,
      icon: '💱',
      title: 'Currency Exchange',
      description: `
        Need to convert money between the CFA Franc and the Turkish Lira (₺)?
  
        ✅ From CFA Franc to Turkish Lira: 10% commission
        ✅ From Turkish Lira to CFA Franc: 5% commission
  
        Fast, secure service accessible to all African students in Turkey.
      `
    },
    {
      id: 2,
      icon: '📱',
      title: 'Phone Sales',
      description: `
        Moussa offers new and used phones at competitive prices.
        Fast delivery, warranties available, and personalized advice to help you choose the right device.
      `
    },
    {
      id: 3,
      icon: '🗣️',
      title: 'English Lessons',
      description: `
        Moussa teaches English with passion and method.
        Private or group lessons, suitable for beginners and advanced learners alike.
      `
    },
    {
      id: 4,
      icon: '🌍',
      title: 'International Facilitator',
      description: `
        Want to study in Turkey? Moussa assists you with all procedures: university registration, housing, visa, and more.
      `
    },
    {
      id: 5,
      icon: '✈️',
      title: 'Travel Agency',
      description: `
        Complete organization of your trip to Turkey: flight tickets, airport pickup, temporary accommodation, and administrative advice.
      `
    },
    {
      id: 6,
      icon: '💼',
      title: 'Business & Representation',
      description: `
        Moussa represents African companies in Turkey for import-export.
        He connects buyers, students, and reliable business partners.
      `
    }
];

  

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 180; // largeur d'une carte + gap
      if (direction === 'left') {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="services-section" id="service">
      <h2>My Services</h2>

      <div className="slider-wrapper">
        <button className="arrow left-arrow" onClick={() => scroll('left')} aria-label="Défiler vers la gauche">
          &#8592;
        </button>

        <div className="services-slider" ref={sliderRef}>
          {servicesData.map(service => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
              tabIndex={0} // pour accessibilité clavier
              onKeyDown={e => { if(e.key === 'Enter') setSelectedService(service); }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={() => scroll('right')} aria-label="Défiler vers la droite">
          &#8594;
        </button>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
