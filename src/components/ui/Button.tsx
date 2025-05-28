import React from 'react';
import { ButtonProps } from '../../types';
import styles from '../../styles/components/Button.module.css';

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  href, 
  onClick, 
  className = '' 
}) => {
  const baseClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;