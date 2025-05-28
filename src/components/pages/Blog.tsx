import React from 'react';
import PageHeader from '../common/PageHeader';
import { blogContent } from '../../data/pageContent';
import styles from '../../styles/components/ValueCard.module.css';

const Blog: React.FC = () => {
  return (
    <>
      <PageHeader 
        title={blogContent.title}
        subtitle={blogContent.subtitle}
      />
      
      <section style={{ padding: '6rem 0', background: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {blogContent.posts.map((post) => (
              <article key={post.id} className={styles.valueCard} style={{ textAlign: 'left', cursor: 'pointer' }}>
                <div style={{ 
                  background: 'var(--primary-orange)', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  {post.category}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--charcoal)' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary-orange)', fontWeight: '600' }}>
                  {new Date(post.date).toLocaleDateString('en-CA', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </article>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              More articles coming soon! Follow us for the latest updates in precision manufacturing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;