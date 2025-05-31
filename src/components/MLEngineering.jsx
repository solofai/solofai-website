// src/components/MLEngineering.jsx
import React from 'react';
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

              <div className="detail-item">
                <span className="detail-label">Technologies:</span>
                <span className="detail-value">
                  {mlEngineering.technologies.join(', ')}
                </span>
              </div>

              {/* {mlEngineering.technologies.map((tech, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-label">Technology:</span>
                  <span className="detail-value">{tech}</span>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section className="previous-experience">
        <div className="container">
          <h2>Previous Experience</h2>
          {mlEngineering.previous.map((exp, idx) => (
            <div key={idx} className="role-card">
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

                <div className="detail-item">
                  <span className="detail-label">Technologies:</span>
                  <span className="detail-value">
                    {exp.technologies.join(', ')}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}

      {/* <section className="tech-section">
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
      </section> */}
        {/* Technologies & Tools Section */}
            <section className="tech-section">
                <div className="container">
                <h2>Technologies & Tools</h2>
                <div className="tech-grid">
                    {allTechs.map((tech, index) => (
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
