import React from 'react';
import Button from '../ui/Button';
import '../../styles/pages/blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero wireframe-bg">
        <div className="container">
          <div className="blog-hero-content">
            <div className="badge blog-hero-badge">
              MANUFACTURING INSIGHTS
            </div>

            <h1>
              Behind the Machines
            </h1>

            <p>
              Follow our journey as we build Canada's most specialized precision 
              manufacturing operation. From complex titanium components to aerospace-grade 
              fittings, we share the stories, challenges, and breakthroughs that define 
              advanced manufacturing.
            </p>

            <div className="blog-hero-buttons">
              <Button variant="outline" size="lg" href="mailto:jobs@nova.co">
                Subscribe to Updates
              </Button>
              <Button variant="outline" size="lg" href="/mission">
                Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Placeholder Section */}
      <section className="cms-placeholder-section section-padding">
        <div className="container">
          <div className="cms-placeholder">
            <div className="cms-placeholder-content">
              <div className="cms-icon">
                📝
              </div>
              <h2>Content Management System Integration</h2>
              <p>
                This area is reserved for your future CMS implementation. 
                Here you can integrate your preferred content management system 
                to manage blog posts, articles, case studies, and manufacturing insights.
              </p>
              
              <div className="cms-features">
                <div className="cms-feature">
                  <span className="feature-icon">📰</span>
                  <span className="feature-text">Blog Posts & Articles</span>
                </div>
                <div className="cms-feature">
                  <span className="feature-icon">🔧</span>
                  <span className="feature-text">Manufacturing Case Studies</span>
                </div>
                <div className="cms-feature">
                  <span className="feature-icon">📊</span>
                  <span className="feature-text">Industry Insights & Data</span>
                </div>
                <div className="cms-feature">
                  <span className="feature-icon">🎥</span>
                  <span className="feature-text">Process Videos & Tutorials</span>
                </div>
                <div className="cms-feature">
                  <span className="feature-icon">📈</span>
                  <span className="feature-text">Project Updates & Milestones</span>
                </div>
                <div className="cms-feature">
                  <span className="feature-icon">🛠️</span>
                  <span className="feature-text">Equipment & Technology Reviews</span>
                </div>
              </div>

              <div className="cms-suggestions">
                <h3>Recommended CMS Options:</h3>
                <div className="cms-options">
                  <div className="cms-option">
                    <strong>Strapi</strong> - Headless CMS with React integration
                  </div>
                  <div className="cms-option">
                    <strong>Contentful</strong> - Enterprise-grade content platform
                  </div>
                  <div className="cms-option">
                    <strong>Sanity</strong> - Real-time collaborative editing
                  </div>
                  <div className="cms-option">
                    <strong>Ghost</strong> - Publishing-focused platform
                  </div>
                </div>
              </div>

              <div className="cms-placeholder-footer">
                <Button variant="primary" size="lg" href="mailto:jobs@nova.co">
                  Discuss CMS Integration
                </Button>
                <Button variant="secondary" size="lg" href="/">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Content Section */}
      <section className="preview-content-section section-padding">
        <div className="container">
          <div className="preview-header">
            <div className="badge">COMING SOON</div>
            <h2>What You Can Expect</h2>
            <p>
              Once our CMS is integrated, this space will feature in-depth content 
              about specialized manufacturing, behind-the-scenes insights, and industry analysis.
            </p>
          </div>

          <div className="preview-grid">
            <div className="preview-card">
              <div className="preview-category">Manufacturing Process</div>
              <h3>Machining Titanium Nozzles for Aerospace Applications</h3>
              <p>
                Deep dive into the specialized techniques and equipment required 
                for precision titanium machining, including tooling selection, 
                coolant strategies, and quality control methods.
              </p>
              <div className="preview-meta">
                <span>Technical Deep-Dive</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
            </div>

            <div className="preview-card">
              <div className="preview-category">Business Insights</div>
              <h3>The Canadian Manufacturing Advantage</h3>
              <p>
                Analysis of why Canadian companies are increasingly choosing 
                domestic suppliers, the impact of tariffs, and opportunities 
                in the specialized manufacturing sector.
              </p>
              <div className="preview-meta">
                <span>Industry Analysis</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className="preview-card">
              <div className="preview-category">Case Study</div>
              <h3>Custom Brass Connectors for Space Agency Project</h3>
              <p>
                Real project walkthrough showcasing our approach to ultra-precise 
                brass component manufacturing, from initial design consultation 
                to final inspection and delivery.
              </p>
              <div className="preview-meta">
                <span>Project Showcase</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section-padding wireframe-bg">
        <div className="container">
          <div className="newsletter-content">
            <div className="badge">STAY UPDATED</div>
            <h2>Get Manufacturing Insights Delivered</h2>
            <p>
              Be the first to read our latest articles, case studies, and industry 
              insights. No spam, just valuable content for manufacturing professionals.
            </p>
            <div className="newsletter-buttons">
              <Button variant="outline" size="lg" href="mailto:jobs@nova.co">
                Subscribe Now
              </Button>
              <Button variant="outline" size="lg" href="/mission">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;