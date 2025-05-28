import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { industryPages } from '../../../data/pageContent';

const Aerospace: React.FC = () => {
  const pageData = industryPages.aerospace;

  return (
    <>
      <PageHeader 
        title={pageData.title}
        subtitle={pageData.subtitle}
      />
      
      <ContentSection
        title={pageData.content.overview.title}
        content={pageData.content.overview.content}
        backgroundColor="gray"
      />

      <FeatureGrid
        title="Aerospace Applications"
        features={pageData.content.applications}
        columns={2}
      />

      <PageCTA
        title="Ready for Aerospace Manufacturing?"
        description="Partner with us for aerospace-grade precision manufacturing with full traceability and certification."
        primaryButton={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Our Capabilities",
          href: "/"
        }}
      />
    </>
  );
};

export default Aerospace;