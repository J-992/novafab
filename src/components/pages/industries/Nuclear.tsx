import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { industryPages } from '../../../data/pageContent';

const Nuclear: React.FC = () => {
  const pageData = industryPages.nuclear;

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
        title="Nuclear Applications"
        features={pageData.content.applications}
        columns={2}
      />

      <PageCTA
        title="Nuclear-Grade Manufacturing"
        description="Safety-critical manufacturing with nuclear industry quality standards and documentation."
        primaryButton={{
          text: "Discuss Your Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View All Industries",
          href: "/"
        }}
      />
    </>
  );
};

export default Nuclear;