import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ResearchSection from '../components/sections/ResearchSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationSection from '../components/sections/EducationSection';
import ProjectsGridSection from '../components/sections/ProjectsGridSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

// 1ページ構成。上から「何者か（Hero / About）→ 何ができるか（Experience / Research / Projects / Skills）
// → 何を証明しているか（Education / Certifications / Awards）」の順に並べ、30秒で読める分だけを開いて出す。
// セクション id と並びは Header.js のナビと一致させること:
//   hero / about / experience / research / projects / skills / education / certifications / achievements / contact
// 長い一覧（6件目以降の経歴・その他の資格・Other Technologies）は各セクション内で折りたたみ、
// 個人開発の技術詳細・全発表の原稿と要旨・OSS・執筆は /work・/research・/more に置く。
const MainPage = () => {
  const { hash } = useLocation();

  // 下層ページから「/#experience」のように戻ってきたときに該当セクションへ移動する。
  // 初回描画直後はフォント読み込みでレイアウトが動き smooth スクロールが途中で止まるため、
  // 描画が落ち着いた次のフレームで即時ジャンプする
  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <ProjectsGridSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
