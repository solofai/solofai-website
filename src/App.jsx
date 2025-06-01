// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import AcademicFoundation from './components/AcademicFoundation';
import MLEngineering from './components/MLEngineering';
import BiometricsResearch from './components/BiometricsResearch';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Desktop Navigation */}
      <Navigation />

      {/* Mobile Header */}
      <header className="mobile-header">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <div className="mobile-logo-container">
          <img src="/solofai-icon.svg" alt="Sol of AI" className="mobile-icon" />
          <span className="mobile-logo">Sol of AI</span>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav className="mobile-nav-drawer">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/academic" onClick={() => setMenuOpen(false)}>Academic</Link>
          <Link to="/engineering" onClick={() => setMenuOpen(false)}>Engineering</Link>
          <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/academic" element={<AcademicFoundation />} />
        <Route path="/engineering" element={<MLEngineering />} />
        <Route path="/research" element={<BiometricsResearch />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          {/* Disclaimer Section */}
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Sol of AI is a private brand / personal initiative focused on sun-inspired AI solutions. 
              It is not affiliated with or endorsed by "The Sol of AI" newsletter/book by Sol Rashidi. 
              Learn more about Sol Rashidi's work at{' '}
              <a href="https://www.solrashidi.com/" target="_blank" rel="noopener noreferrer">
                solrashidi.com
              </a>{' '}
              or{' '}
              <a href="https://solrashidi.substack.com/" target="_blank" rel="noopener noreferrer">
                solrashidi.substack.com
              </a>.
            </p>
          </div>

          {/* Original Footer Content */}
          <div className="footer-info">
            <p className="footer-updated">
              Last updated: May 30, 2025
            </p>
            <p className="footer-credit">
              © 2025 Sol of AI • 
              <a href="mailto:sol@solofai.com">sol@solofai.com</a>
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;