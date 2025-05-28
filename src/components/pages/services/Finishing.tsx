import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { servicePages } from '../../../data/pageContent';

const Finishing: React.FC = () => {
  const pageData = servicePages.finishing;

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
        title="Finishing Capabilities"
        features={pageData.content.capabilities}
        columns={2}
      />

      <PageCTA
        title="Ready to Enhance Your Components?"
        description="Professional finishing services that improve both function and appearance of your precision parts."
        primaryButton={{
          text: "Request Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Manufacturing Services",
          href: "/"
        }}
      />
    </>
  );
};

export default Finishing;