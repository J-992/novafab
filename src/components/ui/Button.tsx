import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size = 'md',
  children, 
  href, 
  onClick, 
  className = '' 
}) => {
  const baseClass = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`;

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