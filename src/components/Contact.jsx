import React from 'react';
import { contactInfo } from '../data/contact';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="icon-large">📫</div>
          <h1>Get in Touch</h1>
          <p className="hero-description">Let's discuss opportunities in ML/AI, research collaborations, or innovative projects</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-method">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:sol@solofai.com" className="contact-link">sol@solofai.com</a>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/lori-pickering-b46841155/" target="_blank" rel="noopener noreferrer" className="contact-link">
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <a href="https://github.com/solofai" target="_blank" rel="noopener noreferrer" className="contact-link">
                @solofai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="summary-section">
        <div className="container">
          <h2>Professional Summary</h2>
          <div className="summary-card">
            <p>
              Machine Learning Engineer with 6+ years of experience in fundamental and applied research. 
              Expertise in graph neural networks (PyTorch, PyG), computer vision, and systems assurance methodologies. 
              Currently focused on cyber hardware security and biometric authentication research.
            </p>
            <div className="skills-highlight">
              <h4>Core Competencies:</h4>
              <ul>
                <li>Graph Neural Networks & Deep Learning</li>
                <li>Computer Vision & Object Detection</li>
                <li>Formal Methods & Systems Assurance</li>
                <li>Research & Development Leadership</li>
              </ul>
            </div>
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

export default Contact;