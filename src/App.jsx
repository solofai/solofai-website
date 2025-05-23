import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import AcademicFoundation from './components/AcademicFoundation';
import MLEngineering from './components/MLEngineering';
import BiometricsResearch from './components/BiometricsResearch';
import Contact from './components/Contact';
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

      {/* MOBILE NAV DRAWER */}
      {menuOpen && (
        <nav className="mobile-nav-drawer">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/academic" onClick={() => setMenuOpen(false)}>Academic</Link>
          <Link to="/engineering" onClick={() => setMenuOpen(false)}>Engineering</Link>
          <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/academic" element={<AcademicFoundation />} />
        <Route path="/engineering" element={<MLEngineering />} />
        <Route path="/research" element={<BiometricsResearch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    {/* ─────── FOOTER ─────── */}
    <footer className="app-footer">
      <div className="footer-container">
        <p className="footer-updated">
          Last updated: May 23, 2025
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
