import React from 'react';
import PageHeader from '../../common/PageHeader';
import ContentSection from '../../common/ContentSection';
import FeatureGrid from '../../common/FeatureGrid';
import PageCTA from '../../common/PageCTA';
import { servicePages } from '../../../data/pageContent';

const CNCMachining: React.FC = () => {
  const pageData = servicePages.cnc;

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
        title="CNC Machining Capabilities"
        features={pageData.content.capabilities}
        columns={2}
      />

      <PageCTA
        title="Need Precision CNC Machining?"
        description="Get your complex components manufactured to exact specifications with our advanced CNC capabilities."
        primaryButton={{
          text: "Get Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View Other Services",
          href: "/services"
        }}
      />
    </>
  );
};

export default CNCMachining;