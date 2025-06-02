// src/components/MLEngineering.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { mlEngineering } from '../data/machinelearning';
import './MLEngineering.css';

const MLEngineering = () => {
  // Combine current and previous experience technologies
  const allTechs = [
    ...mlEngineering.technologies,
    ...mlEngineering.previous.flatMap(exp => exp.technologies)
  ];
  
  return (
    <div className="ml-page">
      {/* Hero Section - using global styles */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{mlEngineering.icon}</div>
          <h1>{mlEngineering.title}</h1>
          <p className="hero-description">{mlEngineering.description}</p>
        </div>
      </section>

      {/* Current Role Section */}
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Current Position</h2>
          <div className="card card-detail">
            <h3>{mlEngineering.role}</h3>
            <div className="role-details">
              <div className="detail-item">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  {mlEngineering.company}
                  {mlEngineering.website && (() => {
                    const href = mlEngineering.website.match(/^https?:\/\//)
                      ? mlEngineering.website
                      : `https://${mlEngineering.website}`;
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        ↗
                      </a>
                    );
                  })()}
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
              {mlEngineering.responsibilities.map((resp, i) => (
                <div key={i} className="detail-item">
                  <span className="detail-label">Responsibility:</span>
                  <span className="detail-value">{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section className="previous-experience">
        <div className="container">
          <h2 className="section-title">Previous Experience</h2>
          {mlEngineering.previous.map((exp, idx) => (
            <div key={idx} className="card card-detail experience-card">
              <h3>{exp.role}</h3>
              <div className="role-details">
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">
                    {exp.company}
                    {exp.website && (() => {
                      const href = exp.website.match(/^https?:\/\//)
                        ? exp.website
                        : `https://${exp.website}`;
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-link"
                        >
                          ↗
                        </a>
                      );
                    })()}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{exp.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{exp.duration}</span>
                </div>
                {exp.responsibilities.map((resp, j) => (
                  <div key={j} className="detail-item">
                    <span className="detail-label">Responsibility:</span>
                    <span className="detail-value">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section>
        <div className="container">
          <h2 className="section-title">Technologies & Tools</h2>
          <div className="tag-container" style={{ justifyContent: 'center' }}>
            {allTechs.map((tech, index) => (
              <span key={index} className="tag tag-outline tech-special">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
            
      {/* Back to Home Button - using global styles */}
      <div className="back-home">
        <Link to="/" className="back-button">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MLEngineering;