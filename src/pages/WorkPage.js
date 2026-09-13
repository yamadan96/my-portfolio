import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubPageHeader from './SubPageHeader';
import ProjectsSection from '../components/sections/ProjectsSection';

// Level 2: 個人開発・研究実装の一覧（トップページには代表4件だけ載せる）。
// カードは畳んだ状態が既定（作ったもの・結果1文・タグ・リンク）。「詳しく」で課題 → 担当 → 技術 → 結果 → 構成図をその場で開く。
// 各カードの「詳細 →」は1件を1ページで読む個別ページ（/projects/:id）へ移動する（実験条件などの証拠はそちら）。
const WorkPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SubPageHeader
        title="All Work"
        lead="個人開発・研究実装の一覧。各カードは「作ったもの」と結果を1文ずつ先に出し、課題・担当・技術・構成図は「詳しく」の中に置いている。"
      />
      <ProjectsSection onOpenProject={(id) => navigate(`/projects/${id}`)} />
    </>
  );
};

export default WorkPage;
