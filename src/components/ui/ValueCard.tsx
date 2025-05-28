import React from 'react';
import { ValueCardProps } from '../../types';
import styles from '../../styles/components/ValueCard.module.css';

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.valueCard}>
      <div className={styles.valueIcon}>{icon}</div>
      <h3 className={styles.valueTitle}>{title}</h3>
      <p className={styles.valueDescription}>{description}</p>
    </div>
  );
};

export default ValueCard;