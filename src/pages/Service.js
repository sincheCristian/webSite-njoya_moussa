import React, { useState, useRef } from 'react';
import './Service.css';

const servicesData = [
    {
      id: 1,
      icon: '💱',
      title: 'Échanges monétaires',
      description: `
        Vous avez besoin de convertir de l'argent entre le Franc CFA et la Livre Turque (₺) ?
  
        ✅ Du Franc CFA vers la Livre Turque : commission de 10%
        ✅ De la Livre Turque vers le Franc CFA : commission de 5%
  
        Service rapide, sécurisé et accessible à tous les étudiants africains en Turquie.
      `
    },
    {
      id: 2,
      icon: '📱',
      title: 'Vente de téléphones',
      description: `
        Moussa propose des téléphones neufs et d’occasion à prix compétitifs.
        Livraison rapide, garanties disponibles, et conseils personnalisés pour bien choisir votre appareil.
      `
    },
    {
      id: 3,
      icon: '🗣️',
      title: 'Cours d’anglais',
      description: `
        Moussa enseigne l’anglais avec passion et méthode.
        Cours particuliers ou en groupe, adaptés aux débutants comme aux avancés.
      `
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Facilitateur international',
      description: `
        Vous souhaitez venir étudier en Turquie ? Moussa vous accompagne dans toutes les démarches : inscription universitaire, logement, visa, etc.
      `
    },
    {
      id: 5,
      icon: '✈️',
      title: 'Agence de voyage',
      description: `
        Organisation complète de votre voyage vers la Turquie : billets d’avion, accueil à l’aéroport, logement temporaire, conseils administratifs.
      `
    },
    {
      id: 6,
      icon: '💼',
      title: 'Business & Représentation',
      description: `
        Moussa représente des entreprises africaines en Turquie pour l’import-export.
        Il met en relation acheteurs, étudiants, et partenaires d’affaires fiables.
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
      <h2>Mes Services</h2>

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
