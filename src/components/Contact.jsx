import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      {/* Hero Section - using global styles */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">📫</div>
          <h1>Get in Touch</h1>
          <p className="hero-description">Let's discuss opportunities in ML/AI, research collaborations, or innovative projects</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="starfield">
        <div className="container">
          <div className="grid grid-auto">
            <div className="card contact-method">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
            
            <div className="card contact-method">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="card contact-method">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                @solofai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section>
        <div className="container">
          <h2 className="section-title">Professional Summary</h2>
          <div className="card card-detail summary-card">
            <p>
              {contactInfo.professionalSummary.description}
            </p>
            <div className="skills-highlight">
              <h4>Core Competencies:</h4>
              <ul>
                {contactInfo.professionalSummary.coreCompetencies.map((competency, index) => (
                  <li key={index}>{competency}</li>
                ))}
              </ul>
            </div>
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

export default Contact;