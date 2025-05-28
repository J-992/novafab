import React from 'react';
import Button from '../ui/Button';
import styles from '../../styles/components/CTASection.module.css';

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.ctaContainer}>
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let us help you bring your most challenging manufacturing requirements to life 
          with our precision engineering capabilities.
        </p>
        <div className={styles.ctaButtons}>
          <Button variant="primary" href="/contact">
            Get a Quote
          </Button>
          <Button variant="secondary" href="/industries">
            View Our Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;