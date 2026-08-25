import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import SkillsSection from '../components/sections/SkillsSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import WritingSection from '../components/sections/WritingSection';
import EducationSection from '../components/sections/EducationSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';

// 情報設計: 研究者・AIエンジニアとしての中身（Experience → Projects → Publications）を
// 上位に置き、経歴の裏付け（Education / Certifications）は末尾へ回している。
// 進行中・投稿準備中の研究（ResearchSection / src/data/research.js）は非公開にしている。
// 再掲するときは import と <ResearchSection /> を AboutSection の直後に戻す。
const MainPage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <PublicationsSection />
    <AchievementsSection />
    <SkillsSection />
    <OpenSourceSection />
    <WritingSection />
    <EducationSection />
    <CertificationsSection />
    <ContactSection />
  </>
);

export default MainPage;
