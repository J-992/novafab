import React from 'react';
import ValueCard from '../ui/ValueCard';
import { CompanyValue } from '../../types';
import styles from '../../styles/components/CompanyValues.module.css';

const CompanyValues: React.FC = () => {
  const values: CompanyValue[] = [
    {
      icon: '⚡',
      title: 'Precision First',
      description: 'Every component manufactured to exact specifications with rigorous quality control processes ensuring consistent results across all production runs.',
    },
    {
      icon: '🔬',
      title: 'Innovation Driven',
      description: 'Leveraging cutting-edge manufacturing technologies and processes to solve complex engineering challenges and deliver superior solutions.',
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'Building components that perform flawlessly in critical applications where failure is not an option, backed by comprehensive testing and validation.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Working closely with clients from design to delivery, providing technical expertise and manufacturing insights to optimize component performance.',
    },
  ];

  return (
    <section className={styles.values}>
      <div className={styles.valuesContainer}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;