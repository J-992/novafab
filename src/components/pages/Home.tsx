import React from 'react';
import Button from '../ui/Button';
import { features } from '../../data/content';
import '../../styles/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToEye, faCheckToSlot, faJetFighter } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
  return (
    <>
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero wireframe-bg">
          <div className="hero-bg"/>
          <div className="container">
            <div className="hero-content">
              <div className="badge hero-badge">
                Manufacturing the Future
              </div>  

              <h1>
                Canada's most efficient factory.
              </h1>

              <p>
                Nova is building the next generation of factories to accelerate the pace
                of advanced Canadian manufacturing: by delivering parts in less time, on
                time, every time.
              </p>

              <div className="hero-buttons">
                <Button variant="outline" size="lg" href="/mission">
                  Our factory
                </Button>
                <Button variant="outline" size="lg" href="/careers">
                  Join our team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section section-padding wireframe-bg">
          <div className="container">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faJetFighter} />
                </div>
                <h3>Components in days, not months</h3>
                <p>We deliver precision-grade machined parts in 5-21 days, depending on complexity and coatings/outside processes.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCheckToSlot} />
                </div>
                <h3>Ultra-reliable</h3>
                <p>Our advanced scheduling, capacity management and factory operating system enables us to meet our promise date and your need date every time.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faArrowsToEye} />
                </div>
                <h3>Transparent</h3>
                <p>Real time visibility of your parts in our factory and supply chain, including inspection results as they happen, from FAI to Final.</p>
              </div>
            </div>
          </div>
        </section>
        

        {/* Mission Section */}
        <section className="mission-section section-padding wireframe-bg">
          <div className="container">
            <div className="mission-header">
              <div className="badge hero-badge">
                OUR MISSION
              </div>
              <h2 className="mission-title">
                Accelerating Advanced Manufacturing
              </h2>
            </div>

            <div className="mission-content">
              <div className="mission-text">
                <p>
                  Canada's Manufacturing & Defense industry is <strong>bottlenecked</strong> by the
                  capacity of a network of owner-operated machine shops that
                  produce <strong>precision metal components</strong>.
                </p>
                <p>
                  Nova is building a series of <strong>highly automated precision
                    manufacturing factories</strong> that will accelerate the entire advanced
                  manufacturing sector and bring the future forward, faster.
                </p>
                <Button variant="primary" size="lg" href="/mission">
                  Learn more about our mission
                </Button>
              </div>

              <div className="mission-visual wireframe-bg">
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section section-padding wireframe-bg">
          <div className="container">
            <h2>Come build with us.</h2>
            <p>
              Join our team of machinists, software engineers, operators and
              automation engineers to manufacture the future.
            </p>
            <Button variant="outline" size="lg" href="/careers">
              See open positions [COMING SOON]
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;