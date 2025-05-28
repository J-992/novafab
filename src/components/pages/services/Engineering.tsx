import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { servicePages } from '../../../data/pageContent';

const Engineering: React.FC = () => {
  const pageData = servicePages.engineering;

  return (
    <>
      <PageHeader 
        title={pageData.title}
        subtitle={pageData.subtitle}
      />
      
      <ContentSection
        title={pageData.content.overview.title}
        content={pageData.content.overview.content}
        backgroundColor="white"
      />

      <FeatureGrid
        title="Our Engineering Capabilities"
        features={pageData.content.capabilities}
        columns={2}
      />

      <PageCTA
        title="Ready to Optimize Your Design?"
        description="Let our engineering team help you achieve manufacturability without compromising performance."
        primaryButton={{
          text: "Request Consultation",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Our Capabilities",
          href: "/services"
        }}
      />
    </>
  );
};

export default Engineering;