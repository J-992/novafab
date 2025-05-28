import React from 'react';
import Button from '../ui/Button';
import { PageCTAProps } from '../../types';
import styles from '../../styles/components/PageCTA.module.css';

const PageCTA: React.FC<PageCTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton
}) => {
  return (
    <section className={styles.pageCTA}>
      <div className={styles.ctaContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.ctaButtons}>
          <Button variant="primary" href={primaryButton.href}>
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button variant="secondary" href={secondaryButton.href}>
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageCTA;