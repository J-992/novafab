import React from 'react';
import styles from '../../styles/components/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCompany}>Nova Precision Fabrication Ltd</div>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <a href="#">CNC Machining</a>
            <a href="#">EDM Processing</a>
            <a href="#">Engineering Consultation</a>
            <a href="#">Quality Testing</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Industries</h4>
            <a href="#">Aerospace</a>
            <a href="#">Defense</a>
            <a href="#">Nuclear</a>
            <a href="#">Robotics</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: info@novafabrication.ca</p>
            <p>Phone: (555) 123-4567</p>
            <p>Canada</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Nova Precision Fabrication Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;