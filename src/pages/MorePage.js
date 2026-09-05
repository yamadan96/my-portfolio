import React from 'react';
import SubPageHeader from './SubPageHeader';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import WritingSection from '../components/sections/WritingSection';

// Level 2: トップに載せていない OSS リポジトリと技術記事。
const MorePage = () => (
  <>
    <SubPageHeader title="OSS & Writing" lead="公開している GitHub リポジトリと、技術記事の選抜。" />
    <OpenSourceSection />
    <WritingSection />
  </>
);

export default MorePage;
