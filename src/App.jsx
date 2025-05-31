import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      {/* MOBILE HEADER */}
      <header className="mobile-header">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <Link to="/" className="mobile-logo">
          Sol of AI
        </Link>
      </header>

      {/* DESKTOP NAVIGATION (new) */}
      <nav className="desktop-nav">
        <div className="nav-container">
          <Link to="/" className="desktop-logo">Sol of AI</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/academic">Academic</Link>
            <Link to="/engineering">Engineering</Link>
            <Link to="/research">Research</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER */}
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

    {/* ─────── FOOTER ─────── */}
    <footer className="app-footer">
      <div className="footer-container">
        <p className="footer-updated">
          Last updated: May 30, 2025
        </p>
        <p className="footer-credit">
          © 2025 Sol of AI • 
          <a href="mailto:sol@solofai.com">sol@solofai.com</a>
        </p>
      </div>
    </footer>

    </Router>
  );
}

export default App;
