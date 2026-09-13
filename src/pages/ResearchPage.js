import React from 'react';
import SubPageHeader from './SubPageHeader';
import PublicationsSection from '../components/sections/PublicationsSection';

// Level 2: 学会発表3件と学位論文を、Abstract・要旨・原稿PDF まで含めて出す。
const ResearchPage = () => (
  <>
    <SubPageHeader
      title="Research"
      lead="学会発表と学位論文。原稿PDF・スライドなど、公開できる資料を添付している。"
    />
    <PublicationsSection />
  </>
);

export default ResearchPage;
