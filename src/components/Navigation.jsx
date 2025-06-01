// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/solofai-icon2.svg'; // Adjust path as needed
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Sol of AI" className="nav-icon" />
          <span className="nav-logo-text">Sol of AI</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/academic" className="nav-link">Academic</Link>
          <Link to="/engineering" className="nav-link">Engineering</Link>
          <Link to="/research" className="nav-link">Research</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

