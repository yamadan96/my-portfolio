import React from 'react';
import SubPageHeader from './SubPageHeader';
import PublicationsSection from '../components/sections/PublicationsSection';

// Level 2: 発表済みの研究4件を、Abstract・要旨・原稿PDF まで含めて出す。
const ResearchPage = () => (
  <>
    <SubPageHeader
      title="Research"
      lead="査読付き学会発表と学位論文。各項目に原稿PDF・スライド・ポスターを添付している。"
    />
    <PublicationsSection />
  </>
);

export default ResearchPage;
