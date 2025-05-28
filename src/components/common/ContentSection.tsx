import React from 'react';
import { ContentSectionProps } from '../../types';
import styles from '../../styles/components/ContentSection.module.css';

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  content,
  imageUrl,
  imagePosition = 'right',
  backgroundColor = 'white'
}) => {
  const renderContent = () => (
    <div className={styles.textContent}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );

  const renderImage = () => (
    <div className={styles.imageContent}>
      <div className={styles.contentImage}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        ) : (
          '🔧'
        )}
      </div>
    </div>
  );

  return (
    <section className={`${styles.contentSection} ${styles[backgroundColor]}`}>
      <div className={styles.contentContainer}>
        {imageUrl ? (
          <div className={`${styles.contentGrid} ${styles[`image${imagePosition === 'left' ? 'Left' : 'Right'}`]}`}>
            {imagePosition === 'left' ? (
              <>
                {renderImage()}
                {renderContent()}
              </>
            ) : (
              <>
                {renderContent()}
                {renderImage()}
              </>
            )}
          </div>
        ) : (
          <div className={styles.singleColumn}>
            {renderContent()}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;