import React from 'react';
import { Link } from 'react-router-dom';
import { biometricsResearch } from '../data/biometrics';
import './BiometricsResearch.css';

const BiometricsResearch = () => {
  return (
    <div className="biometrics-page">
      {/* Hero Section - using global styles */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{biometricsResearch.icon}</div>
          <h1>{biometricsResearch.title}</h1>
          <p className="hero-description">{biometricsResearch.description}</p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Research Project</h2>
          <div className="card card-detail dna-decoration">
            <h3>{biometricsResearch.project}</h3>
            <div className="role-details">
              <div className="detail-item">
                <span className="detail-label">Team:</span>
                <span className="detail-value">{biometricsResearch.team}</span>
              </div>
              {biometricsResearch.github && (
                <div className="detail-item">
                  <span className="detail-label">GitHub:</span>
                  <span className="detail-value">
                    <a href={biometricsResearch.github} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="link-external">
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
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Related Research</h2>
          <div className="card">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {biometricsResearch.related_research.map((paper, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--sun-gold)' }}>▸</span>
                  {paper.authors} ({paper.year}). <em>{paper.title}</em>. {paper.venue}.{' '}
                  <a href={paper.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="link-external">
                    View Paper
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Research Focus Areas</h2>
          <div className="grid grid-auto">
            {biometricsResearch.focus.map((area, index) => (
              <div key={index} className="card">
                <div className="focus-icon">🎯</div>
                <h4 style={{ textAlign: 'center', color: 'var(--sun-gold)' }}>{area}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Technologies & Methodologies</h2>
          <div className="tag-container" style={{ justifyContent: 'center' }}>
            {biometricsResearch.technologies.map((tech, index) => (
              <span key={index} className="tag tag-outline">
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

export default BiometricsResearch;