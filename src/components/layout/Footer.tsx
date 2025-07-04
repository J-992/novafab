import React from 'react';
import NovaLogo from '../ui/NovaLogo';
import '../../styles/components/layout/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div>
            <div className="footer-logo">
              <NovaLogo 
                className="footer-logo-svg"
                // Remove hardcoded fill - now handled by CSS
              />
            </div>
            <p className="footer-description">
              Nova is building highly automated factories that will accelerate 
              the entire advanced manufacturing sector and bring the future 
              forward, faster.
              Website construction still in progress.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4>Talk to us</h4>
            <a href="mailto:jobs@nova.co" className="footer-email">
              
            </a>
            <div className="footer-address">
              <div>Canada</div>
              <div>Serving North America</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4>Navigate</h4>
            <div className="footer-nav">
              <a href="/" className="footer-nav-link">Home</a>
              <a href="/mission" className="footer-nav-link">Mission</a>
              <a href="/careers" className="footer-nav-link">Careers</a>
              <a href="/blog" className="footer-nav-link">Blog</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © 2025 Nova Precision Fabrication Ltd. All rights reserved. Made proudly in Canada.
        </div>
      </div>
    </footer>
  );
};

export default Footer;