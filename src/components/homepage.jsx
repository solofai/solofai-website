// src/components/Homepage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlePrivateProject = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section with Animated Sun */}
      <section className="hero">
        <div className="sun-container">
          <div className="sun" style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}>
            <div className="sun-core"></div>
            <div className="sun-rays">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="ray" style={{ transform: `rotate(${i * 30}deg)` }}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="sun-text">Sol</span> of AI
          </h1>
          <p className="hero-subtitle">Where Sol Meets Silicon</p>
          <p className="hero-description">
            Machine Learning Engineer • AI Researcher • Digital Creator
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => handleNavigation('/engineering')}>
              Explore My Work
            </button>
            <button className="cta-secondary" onClick={() => handleNavigation('/research')}>
              View Research
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-down"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
        <div className="container">
          <h2 className="section-title">The Journey of Sol</h2>
          <div className="about-grid">
            <div className="about-card clickable" onClick={() => handleNavigation('/academic')}>
              <div className="icon-wrapper">
                <div className="icon">🎓</div>
              </div>
              <h3>Academic Foundation</h3>
              <p>Double BS in Physics & Applied Computational Mathematics, MS in Biomedical Forensic Science, MS in Computer Science</p>
              <div className="card-arrow">→</div>
            </div>
            <div className="about-card clickable" onClick={() => handleNavigation('/engineering')}>
              <div className="icon-wrapper">
                <div className="icon">🔒</div>
              </div>
              <h3>Machine Learning Engineer</h3>
              <p>Specializing in cyber hardware security and assurance, developing advanced ML models for critical infrastructure protection</p>
              <div className="card-arrow">→</div>
            </div>
            <div className="about-card clickable" onClick={() => handleNavigation('/research')}>
              <div className="icon-wrapper">
                <div className="icon">🧬</div>
              </div>
              <h3>Biometrics Research</h3>
              <p>Leading innovative research in biometric applications for data science and AI</p>
              <div className="card-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Rays of Innovation</h2>
          <div className="projects-grid">
            <div className="project-card clickable" onClick={() => handleNavigation('/engineering')}>
              <div className="project-glow"></div>
              <h3>Cyber Hardware Security</h3>
              <p>Developing ML models for hardware analysis and threat detection</p>
              <span className="project-tag">Machine Learning</span>
              <div className="card-arrow">→</div>
            </div>
            <div className="project-card clickable" onClick={() => handleNavigation('/research')}>
              <div className="project-glow"></div>
              <h3>Biometric Authentication</h3>
              <p>Researching keystroke dynamics and fake profile detection</p>
              <span className="project-tag">Research</span>
              <div className="card-arrow">→</div>
            </div>
            <div className="project-card" onClick={handlePrivateProject}>
              <div className="project-glow"></div>
              <h3>Radiation Safety Training</h3>
              <p>Developing an educational platform for radiation safety certification</p>
              <span className="project-tag">In Development</span>
              <div className="coming-soon">Private Repository</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Private Repository */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-icon">🔒</div>
            <h2>Project Under Development</h2>
            <p>
              The Radiation Safety Training platform is currently in active development. 
              This repository is private to protect proprietary content and course materials.
            </p>
            <div className="modal-details">
              <h3>Project Overview:</h3>
              <ul>
                <li>Web-based radiation safety certification course</li>
                <li>Interactive learning modules and assessments</li>
                <li>Collaboration with subject matter experts</li>
                <li>Expected public release: TBD</li>
              </ul>
            </div>
            <p className="modal-cta">
              Interested in learning more? Feel free to <a href="/contact">contact me</a> for additional information.
            </p>
          </div>
        </div>
      )}

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Connect with Sol</h2>
          <p className="contact-subtitle">Let's create something brilliant together</p>
          <div className="contact-buttons">
            <a href="mailto:sol@solofai.com" className="contact-btn">
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/lori-pickering-b46841155/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/solofai" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;