import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-text">
            <p>
              Je suis <strong>Njoya Moussa</strong>, étudiant camerounais à l’Université de Kastamonu.
              où je poursuis mes études avec passion et détermination.
              Trilingue (Français, Anglais, Turc), passionné par l’éducation et les échanges interculturels.
            </p>
            <p>
            En parallèle de mes études,j’enseigne l’anglais à <strong>Azerbey Okulu</strong>, j’aide les étudiants à venir à Kastamonu,
            et je facilite les conversions CFA ↔ TL pour la communauté africaine en Turquie.
            </p>
            <p>
            Je crois profondément que l'éducation et les langues sont des clés pour ouvrir le monde.
            Mon objectif est de devenir un pont entre les cultures, en aidant les jeunes à découvrir de nouvelles opportunités académiques et professionnelles.
            Je rêve de construire une communauté d'entraide entre étudiants africains et turcs, où chacun peut apprendre, s’élever et inspirer les autres.
            </p>
            <p>
            Ce que les gens apprécient chez moi, c’est ma capacité à écouter et à trouver des solutions concrètes.
              Il m’est arrivé plus d’une fois d’aider un étudiant à trouver un logement en 24h, ou d’accompagner quelqu’un dans les démarches universitaires en plein week-end.
              Je ne me contente pas de donner des conseils : je m’implique vraiment.
            Pour moi, chaque rencontre est une opportunité de faire une différence.
            </p>

            <div className="timeline">
              <h3>Parcours académique</h3>
              <ul>
                <li>
                  <span className="year">2021 - Présent</span> Étudiant à l'Université de Kastamonu
                </li>
                <li>
                  <span className="year">2019 - 2021</span> Études secondaires au Cameroun
                </li>
              </ul>
            </div>
          </div>
        <div className="about-content">
          

          <div className="about-right">
            <div className="about-cards">
              <div className="card">
                <span className="icon">🎓</span>
                <h3>Étudiant</h3>
                <p>Kastamonu Üniversitesi</p>
              </div>
              <div className="card">
                <span className="icon">🗣️</span>
                <h3>Trilingue</h3>
                <p>Français, Anglais, Turc</p>
              </div>
              <div className="card">
                <span className="icon">👨‍🏫</span>
                <h3>Diversité Culturelle</h3>
                <p>Voyage et nouvelles découverte</p>
              </div>
              <div className="card">
                <span className="icon">💱</span>
                <h3>Esprits d'entrepreneur</h3>
                <p>L'assurence financiere est une obséssion pour ma personne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
