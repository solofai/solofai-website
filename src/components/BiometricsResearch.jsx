import React from 'react';
import { biometricsResearch } from '../data/biometrics';
import './BiometricsResearch.css';

const BiometricsResearch = () => {
  return (
    <div className="biometrics-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <a href="/" className="nav-logo">Sol of AI</a>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/academic" className="nav-link">Academic</a>
            <a href="/engineering" className="nav-link">ML Engineering</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{biometricsResearch.icon}</div>
          <h1>{biometricsResearch.title}</h1>
          <p className="hero-description">{biometricsResearch.description}</p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="project-section">
        <div className="container">
          <h2>Research Project</h2>
          <div className="project-overview">
            <h3>{biometricsResearch.project}</h3>
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Team:</span>
                <span className="detail-value">{biometricsResearch.team}</span>
              </div>
              {biometricsResearch.github && (
                <div className="detail-item">
                  <span className="detail-label">GitHub:</span>
                  <span className="detail-value">
                    <a href={biometricsResearch.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      {biometricsResearch.github.replace('https://github.com/', '')}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

       {/* Related Research Section */}
      <section className="project-section">
        <div className="container">
          <h2>Related Research</h2>
          <ul>
            {biometricsResearch.related_research.map((paper, idx) => (
              <li key={idx} style={{ marginBottom: '1rem' }}>
                {paper.authors} ({paper.year}). <em>{paper.title}</em>. {paper.venue}.{' '}
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  {paper.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="focus-section">
        <div className="container">
          <h2>Research Focus Areas</h2>
          <div className="focus-grid">
            {biometricsResearch.focus.map((area, index) => (
              <div key={index} className="focus-card">
                <div className="focus-icon">🎯</div>
                <h4>{area}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <h2>Technologies & Methodologies</h2>
          <div className="tech-cloud">
            {biometricsResearch.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
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

export default BiometricsResearch;