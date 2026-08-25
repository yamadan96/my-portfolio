import React from 'react';
import SubPageHeader from './SubPageHeader';
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import SkillsSection from '../components/sections/SkillsSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import WritingSection from '../components/sections/WritingSection';
import EducationSection from '../components/sections/EducationSection';
import CertificationsSection from '../components/sections/CertificationsSection';

// Level 2: トップから外した「網羅情報」の置き場。
// 採用担当が裏取りしたくなったときだけ来るページなので、密度は高くてよい。
const MorePage = () => (
  <>
    <SubPageHeader
      title="Background"
      lead="全17社の実務経験、受賞・表彰、使用技術の全一覧、OSS・執筆、学歴と資格。トップページでは要約しか出していない裏付けをここに置いている。"
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
