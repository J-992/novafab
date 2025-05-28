import React, { useEffect } from 'react';
import Button from '../ui/Button';
import styles from '../../styles/components/Hero.module.css';

const Hero: React.FC = () => {
  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 15;
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particlesContainer.appendChild(particle);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.rippleBackground}></div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>
            Precision Manufacturing for{' '}
            <span className={styles.highlight}>Critical Applications</span>
          </h1>
          <p>
            Advanced machining solutions for aerospace, defense, and nuclear industries. 
            Delivering exceptional precision components that meet the most demanding specifications.
          </p>
          <Button variant="primary" href="#contact">
            Get Started
          </Button>
        </div>
        <div className={styles.vectorArt}>
          <div className={`${styles.shape} ${styles.cube1}`}></div>
          <div className={`${styles.shape} ${styles.cube2}`}></div>
          <div className={`${styles.shape} ${styles.cube3}`}></div>
          <div className={`${styles.shape} ${styles.cylinder}`}></div>
          <div className={styles.particles} id="particles"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;