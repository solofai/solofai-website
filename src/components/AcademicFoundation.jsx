import React from 'react';
import { academicFoundation } from '../data/academicFoundation';
import './AcademicFoundation.css';

const AcademicFoundation = () => {
  return (
    <div className="academic-page">
    
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{academicFoundation.icon}</div>
          <h1>{academicFoundation.title}</h1>
          <p className="hero-description">{academicFoundation.description}</p>
        </div>
      </section>

      {/* Degrees Section */}
      <section className="degrees-section">
        <div className="container">
          <h2>Educational Journey</h2>
          <div className="timeline">
            {academicFoundation.degrees.map((degree, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="degree-card">
                    <h3>{degree.degree}</h3>
                    <h4>{degree.institution}</h4>
                    <p className="year">{degree.year}</p>
                    <p className="focus">Focus: {degree.focus}</p>
                    
                    {degree.thesis && (
                      <div className="thesis-section">
                        <h5>{degree.thesis.type}:</h5>
                        <p className="thesis-title">"{degree.thesis.title}"</p>
                      </div>
                    )}
                    
                    {degree.publication && (
                      <div className="publication-section">
                        <h5>Published Research:</h5>
                        <p className="publication-text" 
                           dangerouslySetInnerHTML={{ __html: degree.publication.formatted }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      {academicFoundation.researchInterests && (
        <section className="interests-section">
          <div className="container">
            <h2>Research Interests</h2>
            <div className="interests-grid">
              {academicFoundation.researchInterests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <span className="interest-number">{index + 1}</span>
                  <p>{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Home Button */}
      <div className="back-home">
        <a href="/" className="back-button">
          <span>←</span> Back to Home
        </a>
      </div>
    </div>
  );
};

export default AcademicFoundation;