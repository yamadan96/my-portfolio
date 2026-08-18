import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ResearchSection from '../components/sections/ResearchSection';
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

// 情報設計: 研究者・AIエンジニアとしての中身（Research → Experience → Projects → Publications）を
// 上位に置き、経歴の裏付け（Education / Certifications）は末尾へ回している。
const MainPage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ResearchSection />
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
