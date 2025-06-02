import React from 'react';
import Button from '../ui/Button';
import { features } from '../../data/content';
import '../../styles/pages/home.css';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero wireframe-bg">
        <div className="container">
          <div className="hero-content">
            <div className="badge hero-badge">
              HOW WE'RE DOING IT
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
                Our factory ↓
              </Button>
              <Button variant="outline" size="lg" href="/careers">
                Join our team ⚡
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="mission-header">
            <div className="badge mission-badge">
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
              🏭
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
            See open positions
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;