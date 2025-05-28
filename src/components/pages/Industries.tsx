import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../common/PageHeader';
import ContentSection from '../common/ContentSection';
import FeatureGrid from '../common/FeatureGrid';
import PageCTA from '../common/PageCTA';
import styles from '../../styles/components/ValueCard.module.css';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: '✈️',
      title: 'Aerospace',
      description: 'Precision components for aircraft, spacecraft, and defense systems with full traceability and aerospace-grade certifications.',
      link: '/industries/aerospace',
      features: ['AS9100 Processes', 'Flight-Critical Components', 'Material Traceability', 'Documentation Packages']
    },
    {
      icon: '⚛️',
      title: 'Nuclear',
      description: 'Safety-critical manufacturing for nuclear power generation and research applications with nuclear-qualified processes.',
      link: '/industries/nuclear',
      features: ['Nuclear Safety Standards', 'CANDU Components', 'Quality Documentation', 'Certified Materials']
    },
    {
      icon: '🤖',
      title: 'Robotics',
      description: 'Precision manufacturing for next-generation robotics and automation systems from research to production.',
      link: '/industries/robotics',
      features: ['Robotic Systems', 'Automation Equipment', 'Research Platforms', 'Production Components']
    },
    {
      icon: '🛡️',
      title: 'Defense',
      description: 'Secure, reliable manufacturing for defense and military applications with full security compliance.',
      link: '/industries/defense',
      features: ['Military Systems', 'Secure Manufacturing', 'Communications Equipment', 'Guidance Systems']
    }
  ];

  const capabilities = [
    {
      icon: '🏭',
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art EDM and CNC machining capabilities for the most demanding applications.'
    },
    {
      icon: '📋',
      title: 'Industry Certifications',
      description: 'Working toward aerospace, nuclear, and defense industry certifications and quality standards.'
    },
    {
      icon: '🔍',
      title: 'Quality Assurance',
      description: 'Comprehensive inspection and testing services with full documentation and traceability.'
    },
    {
      icon: '🇨🇦',
      title: 'Canadian Manufacturing',
      description: 'Domestic production reducing supply chain risks and supporting Canadian industry independence.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Industries We <span class='highlight'>Serve</span>"
        subtitle="Precision manufacturing solutions for Canada's most critical industries"
      />
      
      <ContentSection
        title="Specialized Manufacturing Expertise"
        content="<p>Nova Fabrication serves Canada's most demanding industries with precision manufacturing solutions that meet the highest standards for quality, reliability, and compliance. Our specialized capabilities support critical applications across aerospace, defense, nuclear, and robotics sectors.</p><p>From prototype development to production manufacturing, we deliver the precision and documentation required for mission-critical applications.</p>"
        backgroundColor="white"
      />

      {/* Industry Cards Section */}
      <section style={{ padding: '6rem 0', background: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '3rem' }}>
            Our Industry Expertise
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem' }}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.valueCard} style={{ 
                textAlign: 'left', 
                padding: '3rem',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-orange)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginRight: '1rem'
                  }}>
                    {industry.icon}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--charcoal)', margin: 0 }}>
                    {industry.title}
                  </h3>
                </div>
                
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                  {industry.description}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--charcoal)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    Key Capabilities:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: 'var(--primary-orange)', marginRight: '0.5rem' }}>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={industry.link}
                  style={{
                    background: 'var(--primary-orange)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    alignSelf: 'flex-start'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--dark-orange)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--primary-orange)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Why Choose Nova Fabrication"
        features={capabilities}
        columns={2}
      />

      <PageCTA
        title="Ready to Discuss Your Industry Needs?"
        description="Contact us to learn how our specialized manufacturing capabilities can support your industry-specific requirements."
        primaryButton={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Our Services",
          href: "/"
        }}
      />
    </>
  );
};

export default Industries;