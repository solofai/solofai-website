import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const handleNavigation = (path) => {
    navigate(path);
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
            <button className="cta-primary">Explore My Work</button>
            <button className="cta-secondary">View Research</button>
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

      {/* Skills & Tech */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Technologies I Illuminate</h2>
          <div className="tech-orbit">
            <div className="orbit-center">
              <span>ML/AI</span>
            </div>
            {['Python', 'PyTorch', 'PyG', 'Polars', 'C++', 'Java', 'Cloud'].map((tech, i) => (
              <div 
                key={tech} 
                className="orbit-item" 
                style={{ 
                  transform: `rotate(${i * 51.4}deg) translateX(150px) rotate(-${i * 51.4}deg)`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Rays of Innovation</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-glow"></div>
              <h3>Cyber Hardware Security</h3>
              <p>Developing ML models for advanced threat detection in hardware systems</p>
              <span className="project-tag">Machine Learning</span>
            </div>
            <div className="project-card">
              <div className="project-glow"></div>
              <h3>Biometric Research</h3>
              <p>Pioneering new approaches in biometric data analysis and AI applications</p>
              <span className="project-tag">Research</span>
            </div>
            <div className="project-card">
              <div className="project-glow"></div>
              <h3>Radiation Safety Training</h3>
              <p>Building an educational platform for radiation safety certification</p>
              <span className="project-tag">Web Development</span>
            </div>
          </div>
        </div>
      </section>

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