import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About me</h2>

        <div className="about-text">
            <p>
               <p><h4>Hello and welcome to my world </h4></p>
               My name is <strong>Nji Njayou Njoya Moussa</strong> born on July 13th in Foumban, Cameroon, a city rich in culture,
               history, and pride. I was raised in Cameroon where I completed my high school education at College IPBP, 
               before embarking on a new chapter abroad.
            </p>
            <p>
              Today, I live in <strong>Kastamonu</strong> , <strong> Turkey </strong>, where I’m currently studying Civil Engineering at Kastamonu University. 
              My journey has been anything but linear  and that’s exactly what has shaped my strength, 
              resilience, and ambition.
            </p>
            <p>
              Over the years, I’ve worn many hats: I’ve worked as a teacher, a translator, a conversion agent
              , a sales agent, and a business manager. Every experience taught me something valuable and pushed 
               me closer to my ultimate goal: to become one of the greatest businessmen of my generation.
            </p>
            <p>
              I’m the founder of NM & Co, a growing business initiative that reflects my passion for entrepreneurship, leadership, 
              and value creation. I’m also equipped with technical skills in AutoCAD, Microsoft Office, Canva, CapCut, and Meta 
              Business Suite. I speak French, English, and Turkish fluently, which allows me to navigate and operate across diverse 
              markets and communities.
            </p>
            <p>
              What drives me every single day? A big dream. I aspire to be on the Forbes list as one of the richest and most 
              impactful men on Earth. But more than just wealth, I want to build, inspire, and leave a legacy — to be remembered 
              not just for what I achieved, but for what I helped others become.
            </p>

            <div className="timeline">
              <h3>Academic background</h3>
              <ul>
                <li>
                  <span className="year">2021 - Now</span>Student at Kastamonu University
                </li>
                <li>
                  <span className="year">2019 - 2021</span> Secondary education in Cameroon
                </li>
              </ul>
            </div>
          </div>
        <div className="about-content">
          
          <div className="about-right">
            <div className="about-cards">
              <div className="card">
                <span className="icon">🎓</span>
                <h3>Student</h3>
                <p>Kastamonu University</p>
              </div>
              <div className="card">
                <span className="icon">🗣️</span>
                <h3>Trilingual</h3>
                <p>French, English, Turkish</p>
              </div>
              <div className="card">
                <span className="icon">👨‍🏫</span>
                <h3>Cultural Diversity</h3>
                <p>Travel and New Discoveries</p>
              </div>
              <div className="card">
                <span className="icon">💱</span>
                <h3>Entrepreneurial Spirit</h3>
                <p>Financial security is an obsession for me.</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          This website is a glimpse into my journey, my projects, and my mission.
          Thank you for being part of it.
        </p>
      </div>
    </section>
  );
}

export default About;
