import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import AcademicFoundation from './components/AcademicFoundation';
import MLEngineering from './components/MLEngineering';
import BiometricsResearch from './components/BiometricsResearch';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* DESKTOP NAVBAR */}
      <Navbar />

      {/* MOBILE HEADER */}
      <header className="mobile-header">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <div className="mobile-logo">
          <Logo 
            variant="icon" 
            size="32px" 
            showText={true}
            linkTo="/"
          />
        </div>
      </header>

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

      {/* MAIN CONTENT */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/academic" element={<AcademicFoundation />} />
          <Route path="/engineering" element={<MLEngineering />} />
          <Route path="/research" element={<BiometricsResearch />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <Logo 
              variant="full" 
              size="60px"
              linkTo="/"
            />
          </div>
          <div className="footer-info">
            <p className="footer-updated">
              Last updated: May 23, 2025
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