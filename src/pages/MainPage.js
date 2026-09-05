import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import ResearchHighlightSection from '../components/sections/ResearchHighlightSection';
import CareerSection from '../components/sections/CareerSection';
import SkillsCoreSection from '../components/sections/SkillsCoreSection';
import AboutContactSection from '../components/sections/AboutContactSection';

// 情報設計（30秒で読み切れるトップ → 裏付けは下層へ）
//   Level 1 = このページ:
//     Hero（何者か） → 01 職務経歴6社 → 02 研究・発表3件 → 03 スキル4領域 → 04 プロフィール・連絡先
//   Level 2 = /work（個人開発・研究実装）・/research（全発表と原稿）・/more（CV: 全経歴・受賞・資格・執筆）
//   Level 3 = /experience/:id（各社での担当と技術詳細）
//
// トップに置かないもの: 個人開発の一覧・資格・学歴・OSS・執筆・短期インターン・投稿準備中の研究の詳細
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
      <CareerSection />
      <ResearchHighlightSection />
      <SkillsCoreSection />
      <AboutContactSection />
    </>
  );
};

export default MainPage;
