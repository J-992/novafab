import React from 'react';
import styles from '../../styles/components/ValueProposition.module.css';

const ValueProposition: React.FC = () => {
  return (
    <section className={styles.valueProp}>
      <div className={styles.valuePropContainer}>
        <h2>Engineering Excellence Through Precision</h2>
        <p>
          Nova Fabrication specializes in producing high-precision components for mission-critical 
          applications. Our advanced EDM and CNC machining capabilities enable us to manufacture 
          complex geometries with exceptional accuracy, supporting Canada's aerospace, defense, 
          and nuclear sectors with reliable domestic manufacturing solutions.
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;