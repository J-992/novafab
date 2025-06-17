import React from 'react';
import Button from '../ui/Button';
import '../../styles/pages/mission.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faGear, faGraduationCap, faMicroscope, faRocket, faShield, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'; // Assuming you might want to use a Canadian icon later

const Mission: React.FC = () => {
  return (
    <>
      <div className="mission-page">
        {/* Hero Section */}
        <section className="mission-hero wireframe-bg">
          <div className="container">
            <div className="mission-hero-content">
              <div className="badge mission-hero-badge">
                OUR MISSION
              </div>

              <h1>
                Specialized Manufacturing for Canada's Future
              </h1>

              <p>
                We're building a precision machine shop focused on ultra-specialized,
                low-volume components for Canada's aerospace, defense, and engineering sectors.
                When standard manufacturing can't deliver, we step in.
              </p>

              <div className="mission-hero-buttons">
                <Button variant="outline" size="lg" href="/careers">
                  Join Our Team [COMING SOON]
                </Button>
                <Button variant="outline" size="lg" href="">
                  Get a Quote [COMING SOON]
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem-section section-padding wireframe-bg">
          <div className="container">
            <div className="problem-content">
              <div className="problem-text">
                <h2>The Canadian Manufacturing Gap</h2>
                <p>
                  Canadian aerospace companies, engineering teams, and research institutions
                  face a critical challenge: <strong>finding reliable, domestic sources</strong> for
                  highly specialized, low-volume precision components.
                </p>
                <p>
                  Current options force them to choose between <strong>overseas delays</strong>,
                  <strong> American supply chain dependencies</strong>, or <strong>compromising on specifications</strong>.
                  With rising tariffs and supply chain uncertainties, Canadian organizations
                  need a better solution.
                </p>
              </div>

              <div className="problem-visual wireframe-bg">
                <div className="problem-stats">
                  <div className="stat-item">
                    <span className="stat-number">6-18</span>
                    <span className="stat-label">Months typical lead time</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">40%</span>
                    <span className="stat-label">Cost increase from tariffs</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">85%</span>
                    <span className="stat-label">Prefer Canadian suppliers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section section-padding wireframe-bg">
          <div className="container">
            <div className="solution-header">
              <div className="badge solution-badge">
                OUR APPROACH
              </div>
              <h2>Ultra-Specialized, Ultra-Reliable</h2>
            </div>

            <div className="solution-grid">
              <div className="solution-item">
                <div className="solution-icon">
                  <FontAwesomeIcon icon={faUsersViewfinder} />
                </div>
                <h3>Niche Focus</h3>
                <p>
                  We specialize exclusively in complex, low-volume parts that larger
                  shops won't touch. Custom titanium nozzles, precision brass connectors,
                  exotic alloy components - if it's specialized, we're interested.
                </p>
              </div>

              <div className="solution-item">
                <div className="solution-icon">
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <h3>Speed & Precision</h3>
                <p>
                  Our streamlined processes and specialized equipment deliver
                  aerospace-grade precision in weeks, not months. Every part
                  meets or exceeds specifications, every time.
                </p>
              </div>

              <div className="solution-item">
                <div className="solution-icon">
                  <FontAwesomeIcon icon={faCanadianMapleLeaf} />
                </div>
                <h3>Canadian Independence</h3>
                <p>
                  Built for Canadian organizations who need reliable, domestic
                  manufacturing. No tariff worries, no supply chain disruptions,
                  no compromises on quality or timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section className="market-section section-padding wireframe-bg">
          <div className="container">
            <div className="market-content">
              <div className="market-visual wireframe-bg">
                <h3>Our Target Markets</h3>
                <div className="market-list">
                  <div className="market-item">
                    <span className="market-icon">
                      <FontAwesomeIcon icon={faRocket} />
                    </span>
                    <span>Canadian Space Agency contractors</span>
                  </div>
                  <div className="market-item">
                    <span className="market-icon">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    <span>University engineering teams</span>
                  </div>
                  <div className="market-item">
                    <span className="market-icon">
                      <FontAwesomeIcon icon={faShield} />
                    </span>
                    <span>Defense & aerospace companies</span>
                  </div>
                  <div className="market-item">
                    <span className="market-icon">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </span>
                    <span>Research institutions</span>
                  </div>
                  <div className="market-item">
                    <span className="market-icon">
                      <FontAwesomeIcon icon={faGear} />
                    </span>
                    <span>Advanced manufacturing OEMs</span>
                  </div>
                </div>
              </div>

              <div className="market-text">
                <h2>Serving Canada's Innovation Leaders</h2>
                <p>
                  Our clients are pushing the boundaries of what's possible. They need
                  components that don't exist off-the-shelf, manufactured to tolerances
                  that matter, delivered when promised.
                </p>
                <p>
                  From <strong>custom titanium rocket nozzles</strong> for university aerospace teams
                  to <strong>precision brass fittings</strong> for Canadian Space Agency projects,
                  we manufacture the impossible-to-find parts that enable breakthrough innovation.
                </p>
                <Button variant="primary" size="lg" href="">
                  Discuss Your Project [COMING SOON]
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section section-padding wireframe-bg">
          <div className="container">
            <div className="vision-content">
              <div className="badge mission-hero-badge ">OUR VISION</div>
              <h2>Building Canada's Manufacturing Future</h2>
              <p>
                We're starting with specialized, low-volume precision manufacturing
                to build the foundation for something bigger. Our goal is to create
                significant cash flow that will fuel expansion into more complex,
                automated manufacturing capabilities.
              </p>
              <p>
                This is just the beginning. Every titanium nozzle, every precision
                connector, every complex component we deliver builds toward a larger
                vision of Canadian manufacturing independence and innovation.
              </p>
              <div className="vision-buttons">
                <Button variant="outline" size="lg" href="/careers">
                  Be Part of the Vision [COMING SOON]
                </Button>
                <Button variant="outline" size="lg" href="/blog">
                  Follow Our Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mission;