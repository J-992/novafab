import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { industryPages } from '../../../data/pageContent';

const Defense: React.FC = () => {
  const pageData = industryPages.defense;

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
        title="Defense Applications"
        features={pageData.content.applications}
        columns={2}
      />

      <PageCTA
        title="Secure Defense Manufacturing"
        description="Trusted manufacturing partner for defense and military applications with full security compliance."
        primaryButton={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Capabilities",
          href: "/"
        }}
      />
    </>
  );
};

export default Defense;