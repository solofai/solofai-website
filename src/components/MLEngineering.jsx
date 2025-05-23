import React from 'react';
import { mlEngineering } from '../data/machinelearning';
import './MLEngineering.css';

const MLEngineering = () => {
  return (
    <div className="ml-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <a href="/" className="nav-logo">Sol of AI</a>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/academic" className="nav-link">Academic</a>
            <a href="/research" className="nav-link">Research</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{mlEngineering.icon}</div>
          <h1>{mlEngineering.title}</h1>
          <p className="hero-description">{mlEngineering.description}</p>
        </div>
      </section>

      {/* Current Role Section */}
      <section className="role-section">
        <div className="container">
          <h2>Current Position</h2>
          <div className="role-card">
            <h3>{mlEngineering.role}</h3>
            <div className="role-details">
              <div className="detail-item">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  {mlEngineering.company}
                  {mlEngineering.website && (
                    <a href={`https://${mlEngineering.website}`} target="_blank" rel="noopener noreferrer" className="company-link">
                      ↗
                    </a>
                  )}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{mlEngineering.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">{mlEngineering.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="responsibilities-section">
        <div className="container">
          <h2>Key Responsibilities</h2>
          <div className="responsibilities-grid">
            {mlEngineering.responsibilities.map((resp, index) => (
              <div key={index} className="responsibility-card">
                <div className="resp-number">{index + 1}</div>
                <p>{resp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <h2>Technologies & Tools</h2>
          <div className="tech-grid">
            {mlEngineering.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="back-home">
        <a href="/" className="back-button">
          <span>←</span> Back to Home
        </a>
      </div>
    </div>
  );
};

export default MLEngineering;