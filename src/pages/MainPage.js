import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SelectedWorkSection from '../components/sections/SelectedWorkSection';
import CareerSection from '../components/sections/CareerSection';
import ResearchHighlightSection from '../components/sections/ResearchHighlightSection';
import SkillsCoreSection from '../components/sections/SkillsCoreSection';
import ContactSection from '../components/sections/ContactSection';

// 情報設計（Progressive Disclosure）
//   Level 1 = このページ: 何者か → 代表4件 → 経歴6社 → 代表研究 → 4領域 → 連絡先
//   Level 2 = /work・/research・/more: 一覧と裏付け
//   Level 3 = /experience/:id・各カードの技術詳細: 実装・実験条件
//
// トップから外したもの（削除ではなく降格）:
//   About の長文 → Hero の2行へ集約
//   Projects 13件 → /work
//   Publications 全文 → /research
//   Awards / Education / Certifications / OSS / Writing / 短期インターン → /more
//   進行中の研究（research.js） → 非公開
const MainPage = () => (
  <>
    <HeroSection />
    <SelectedWorkSection />
    <CareerSection />
    <ResearchHighlightSection />
    <SkillsCoreSection />
    <ContactSection />
  </>
);

export default MainPage;
