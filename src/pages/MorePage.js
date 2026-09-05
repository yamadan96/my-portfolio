import React from 'react';
import SubPageHeader from './SubPageHeader';
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import SkillsSection from '../components/sections/SkillsSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import WritingSection from '../components/sections/WritingSection';
import EducationSection from '../components/sections/EducationSection';
import CertificationsSection from '../components/sections/CertificationsSection';

// Level 2: トップから外した網羅情報の置き場（CV）。
// 裏取りをしたい読み手だけが来るページなので、密度は高くてよい。
const MorePage = () => (
  <>
    <SubPageHeader
      title="CV"
      lead="全17社の実務経験、受賞・掲載、使用技術の全一覧、OSS・執筆、学歴と資格。トップページで要約した内容の裏付け。"
    />
    <ExperienceSection />
    <AchievementsSection />
    <SkillsSection />
    <OpenSourceSection />
    <WritingSection />
    <EducationSection />
    <CertificationsSection />
  </>
);

export default MorePage;
