import React from 'react';
import SubPageHeader from './SubPageHeader';
import ProjectsSection from '../components/sections/ProjectsSection';

// Level 2: 個人開発・研究実装の一覧（トップページには載せない）。
// 各カードの「技術詳細を見る」が Level 3（アーキテクチャ・実験条件）にあたる。
const WorkPage = () => (
  <>
    <SubPageHeader
      title="All Work"
      lead="個人開発・研究実装の一覧。各項目は「作ったもの → 課題 → 結果」の順に読めるようにし、アーキテクチャや実験条件は折りたたみの中に置いている。"
    />
    <ProjectsSection />
  </>
);

export default WorkPage;
