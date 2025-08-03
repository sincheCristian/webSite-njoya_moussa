import React from 'react';
import './home.css';
import profile from '../assets/photo2.jpg';
function Home() {
    return (
        <div className="home-container" id="home">
            <div className="home-left">
                <h1>Hello, I'm  <span className="highlight">Njoya Moussa</span></h1>
                 <h2>Student, teacher & international facilitator</h2>
                 <p>Passionate about education, languages ​​and supporting students, I am here to connect cultures and opportunities.</p>
                 <div className="home-buttons">
                    <a href="#contact" className="btn-secondary">Contact</a>
                    <a href="/CV_MOUSSA.pdf" className="btn-download" download target="_blank" rel="noopener noreferrer">Mon CV</a>
                 </div>
            </div>
            <div className="home-right">
                <img src={profile} alt="Njoya Moussa" className='profile-img' />
            </div>
        </div>
    );
}

export default Home;