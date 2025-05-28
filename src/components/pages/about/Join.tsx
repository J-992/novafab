import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { aboutPages } from '../../../data/pageContent';

const Join: React.FC = () => {
  const pageData = aboutPages.join;

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
        title="Why Join Nova Fabrication?"
        features={pageData.content.benefits}
        columns={2}
      />

      <PageCTA
        title="Ready to Join Our Team?"
        description="Send us your resume and let's discuss how you can contribute to Canada's manufacturing future."
        primaryButton={{
          text: "Send Resume",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn About Us",
          href: "/about/company-profile"
        }}
      />
    </>
  );
};

export default Join;