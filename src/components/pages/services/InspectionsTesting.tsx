import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { servicePages } from '../../../data/pageContent';

const InspectionsTesting: React.FC = () => {
  const pageData = servicePages.inspections;

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
        title="Quality Assurance Capabilities"
        features={pageData.content.capabilities}
        columns={2}
      />

      <PageCTA
        title="Need Quality Documentation?"
        description="Comprehensive inspection and testing services with full documentation for critical applications."
        primaryButton={{
          text: "Learn More",
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

export default InspectionsTesting;