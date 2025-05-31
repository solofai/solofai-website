// ===== src/components/Logo.jsx =====
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ 
  variant = 'icon', // 'icon' or 'full'
  size = '40px',
  className = '',
  showText = false,
  linkTo = '/'
}) => {
  const logoSrc = variant === 'full' 
    ? '/sol-logo-icon.svg'  // Full logo with text
    : '/sol-icon.svg';      // Icon only

  const LogoImage = () => (
    <img 
      src={logoSrc}
      alt="Sol of AI"
      style={{ height: size }}
      className={`logo-image ${className}`}
    />
  );

  const LogoContent = () => (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <LogoImage />
      {showText && variant === 'icon' && (
        <span 
          className="logo-text"
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: '#ffd700' // Fallback
          }}
        >
          Sol of AI
        </span>
      )}
    </div>
  );

  // If linkTo is provided, wrap in Link
  if (linkTo) {
    return (
      <Link to={linkTo} className="logo-link" style={{ textDecoration: 'none' }}>
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;