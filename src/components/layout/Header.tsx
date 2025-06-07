import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/content';
import NovaLogo from '../ui/NovaLogo';
import '../../styles/components/layout/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-container">
          {/* Logo */}
          <a href="/" className={`header-logo ${isScrolled ? 'scrolled' : ''}`}>
            <NovaLogo 
              className="header-logo-svg"
              // Remove hardcoded fill - now handled by CSS
            />
          </a>

          {/* Navigation */}
          <div className="header-nav">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`header-nav-link ${isScrolled ? 'scrolled' : ''}`}
              >
                {item.label}
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="/careers"
              className={`btn btn-outline btn-sm header-cta ${isScrolled ? 'scrolled' : ''}`}
            >
              CAREERS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;