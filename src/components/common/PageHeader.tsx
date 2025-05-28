import React from 'react';
import { PageHeaderProps } from '../../types';
import styles from '../../styles/components/PageHeader.module.css';

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage 
}) => {
  const headerStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section 
      className={`${styles.pageHeader} ${backgroundImage ? styles.withImage : ''}`}
      style={headerStyle}
    >
      <div className={styles.headerContainer}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;