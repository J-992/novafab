import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { industryPages } from '../../../data/pageContent';

const Robotics: React.FC = () => {
  const pageData = industryPages.robotics;

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
        title="Robotics Applications"
        features={pageData.content.applications}
        columns={2}
      />

      <PageCTA
        title="Powering Robotics Innovation"
        description="Precision components for the next generation of robotics and automation systems."
        primaryButton={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Explore Other Industries",
          href: "/"
        }}
      />
    </>
  );
};

export default Robotics;