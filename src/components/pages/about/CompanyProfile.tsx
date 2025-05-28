import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { aboutPages } from '../../../data/pageContent';

const CompanyProfile: React.FC = () => {
  const pageData = aboutPages.companyProfile;

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

      <ContentSection
        title={pageData.content.mission.title}
        content={pageData.content.mission.content}
        backgroundColor="gray"
      />

      <ContentSection
        title={pageData.content.vision.title}
        content={pageData.content.vision.content}
        backgroundColor="white"
      />

      <FeatureGrid
        title="Our Founders"
        features={pageData.founders}
        columns={2}
      />

      <PageCTA
        title="Ready to Work Together?"
        description="Partner with Nova Fabrication for your precision manufacturing needs."
        primaryButton={{
          text: "Get in Touch",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Join Our Team",
          href: "/about/join"
        }}
      />
    </>
  );
};

export default CompanyProfile;