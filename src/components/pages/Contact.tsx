import React, { useState } from 'react';
import PageHeader from '../common/PageHeader';
import styles from '../../styles/components/ContactForm.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <PageHeader 
        title="Contact <span class='highlight'>Nova Fabrication</span>"
        subtitle="Get in touch with our team to discuss your precision manufacturing needs"
      />
      
      <section style={{ padding: '6rem 0', background: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            
            <div className={styles.contactForm}>
              <h2 style={{ marginBottom: '2rem', color: 'var(--charcoal)' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="engineering">Engineering Consultation</option>
                    <option value="cnc">CNC Machining</option>
                    <option value="edm">EDM Services</option>
                    <option value="finishing">Finishing Services</option>
                    <option value="inspection">Inspection & Testing</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project requirements, materials, quantities, and timeline..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              
              <div className={styles.contactItem}>
                <strong>📧 Email:</strong><br />
                info@novafabrication.ca<br />
                quotes@novafabrication.ca
              </div>

              <div className={styles.contactItem}>
                <strong>📞 Phone:</strong><br />
                (555) 123-4567
              </div>

              <div className={styles.contactItem}>
                <strong>📍 Location:</strong><br />
                Canada<br />
                Serving North America
              </div>

              <div className={styles.contactItem}>
                <strong>🕒 Business Hours:</strong><br />
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </div>

              <div className={styles.contactItem}>
                <strong>⚡ Response Time:</strong><br />
                We typically respond to inquiries within 4-6 hours during business hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;