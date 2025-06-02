import React from 'react';
import { Link } from 'react-router-dom';
import { academicFoundation } from '../data/academicFoundation';
import './AcademicFoundation.css';

const AcademicFoundation = () => {
  return (
    <div className="academic-page">
      {/* Hero Section - using global styles */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">{academicFoundation.icon}</div>
          <h1>{academicFoundation.title}</h1>
          <p className="hero-description">{academicFoundation.description}</p>
        </div>
      </section>

      {/* Degrees Section */}
      <section className="starfield">
        <div className="container">
          <h2 className="section-title">Educational Journey</h2>
          <div className="timeline">
            <div className="timeline-line"></div>
            {academicFoundation.degrees.map((degree, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="card degree-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      {academicFoundation.researchInterests && (
        <section className="about starfield">
          <div className="container">
            <h2 className="section-title">Research Interests</h2>
            <div className="grid grid-auto">
              {academicFoundation.researchInterests.map((interest, index) => (
                <div key={index} className="card">
                  <span className="number-badge">{index + 1}</span>
                  <p>{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Home Button - using global styles */}
      <div className="back-home">
        <Link to="/" className="back-button">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AcademicFoundation;