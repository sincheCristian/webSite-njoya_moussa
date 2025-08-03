import React from 'react';
import './navBar.css';
function NavBar() {
    return (
        <header className="navbar">
            <h1 className="logo">Njoya Moussa</h1>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href='#service'>Mes Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default NavBar;