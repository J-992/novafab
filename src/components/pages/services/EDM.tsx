import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { servicePages } from '../../../data/pageContent';

const EDM: React.FC = () => {
  const pageData = servicePages.edm;

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
        title="EDM Capabilities"
        features={pageData.content.capabilities}
        columns={2}
      />

      <PageCTA
        title="Need Precision EDM Services?"
        description="Let us manufacture your most complex components with our advanced EDM capabilities."
        primaryButton={{
          text: "Get Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View All Services",
          href: "/"
        }}
      />
    </>
  );
};

export default EDM;