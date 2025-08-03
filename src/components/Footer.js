import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h3>Njoya Moussa</h3>
          <p>Étudiant, enseignant et facilitateur international.<br />Connectons-nous sur les réseaux !</p>
        </div>

        <div className="footer-center">
          <h4>Suivez-moi</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/njoya_moussa_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/moussa.njoya.463982" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@n.moussa3" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/+237691822176" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-right">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#service">Mes services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Njoya Moussa. Tous droits réservés.</p>
        <p className="signature">Conçu & codé avec ❤️ par <strong>Christian Sinche</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
