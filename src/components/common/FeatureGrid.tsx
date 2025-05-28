import React from 'react';
import ValueCard from '../ui/ValueCard';
import { FeatureGridProps } from '../../types';
import styles from '../../styles/components/FeatureGrid.module.css';

const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  title, 
  features, 
  columns = 3 
}) => {
  return (
    <section className={styles.featureGrid}>
      <div className={styles.featureContainer}>
        <h2>{title}</h2>
        <div className={`${styles.grid} ${styles[`columns${columns}`]}`}>
          {features.map((feature, index) => (
            <ValueCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;