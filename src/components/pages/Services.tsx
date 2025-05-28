import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../common/PageHeader';
import ContentSection from '../common/ContentSection';
import FeatureGrid from '../common/FeatureGrid';
import PageCTA from '../common/PageCTA';
import styles from '../../styles/components/ValueCard.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📐',
      title: 'Engineering Consultation',
      description: 'Expert design optimization and manufacturing guidance for complex precision components.',
      link: '/services/engineering',
      features: ['Design for Manufacturing', 'Material Selection', 'Feasibility Analysis', 'Process Optimization']
    },
    {
      icon: '⚙️',
      title: 'CNC Machining',
      description: 'High-precision computer numerical control machining for complex geometries and tight tolerances.',
      link: '/services/cnc-machining',
      features: ['5-Axis Machining', 'Tight Tolerances', 'Advanced Materials', 'In-Process Inspection']
    },
    {
      icon: '⚡',
      title: 'Electrical Discharge Machining',
      description: 'Precision EDM services for complex internal geometries and hard-to-machine materials.',
      link: '/services/edm',
      features: ['Wire EDM', 'Sinker EDM', 'Hard Materials', 'Surface Texturing']
    },
    {
      icon: '✨',
      title: 'Finishing Services',
      description: 'Professional surface treatments and finishing processes for enhanced performance and appearance.',
      link: '/services/finishing',
      features: ['Surface Polishing', 'Protective Coatings', 'Deburring & Edge Finishing', 'Custom Treatments']
    },
    {
      icon: '📏',
      title: 'Inspections & Testing',
      description: 'Comprehensive quality assurance and testing services ensuring component reliability and compliance.',
      link: '/services/inspections-testing',
      features: ['Dimensional Inspection', 'Material Testing', 'Documentation', 'Compliance Verification']
    }
  ];

  const capabilities = [
    {
      icon: '🎯',
      title: 'Precision Manufacturing',
      description: 'Tolerances to ±0.0001" for the most demanding applications and critical specifications.'
    },
    {
      icon: '🔬',
      title: 'Advanced Materials',
      description: 'Expertise in machining titanium, Inconel, stainless steel, and other challenging materials.'
    },
    {
      icon: '📊',
      title: 'Complete Documentation',
      description: 'Full traceability, material certifications, and quality documentation for all projects.'
    },
    {
      icon: '⏱️',
      title: 'Fast Turnaround',
      description: 'Efficient processes and responsive service for both prototype and production requirements.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Manufacturing <span class='highlight'>Services</span>"
        subtitle="Comprehensive precision manufacturing solutions from design to delivery"
      />
      
      <ContentSection
        title="Complete Manufacturing Capabilities"
        content="<p>Nova Fabrication offers a full range of precision manufacturing services designed to meet the most demanding requirements of aerospace, defense, nuclear, and robotics industries. From initial design consultation through final inspection, we provide the expertise and capabilities needed to bring your most challenging projects to life.</p><p>Our integrated approach combines advanced manufacturing technologies with rigorous quality control to ensure every component meets or exceeds your specifications.</p>"
        backgroundColor="white"
      />

      {/* Services Cards Section */}
      <section style={{ padding: '6rem 0', background: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--charcoal)', marginBottom: '3rem' }}>
            Our Service Offerings
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
            {services.map((service, index) => (
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
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--charcoal)', margin: 0 }}>
                    {service.title}
                  </h3>
                </div>
                
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                  {service.description}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--charcoal)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    Key Capabilities:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {service.features.map((feature, featureIndex) => (
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
                  to={service.link}
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
        title="Why Choose Our Manufacturing Services"
        features={capabilities}
        columns={2}
      />

      <PageCTA
        title="Ready to Start Manufacturing?"
        description="Contact us to discuss your precision manufacturing requirements and get a detailed quote for your project."
        primaryButton={{
          text: "Get Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Industries",
          href: "/industries"
        }}
      />
    </>
  );
};

export default Services;