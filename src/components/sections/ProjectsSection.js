import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import Disclosure from '../ui/Disclosure';
import MermaidDiagram from '../ui/MermaidDiagram';
import projects from '../../data/projects';

// /work の絞り込み。All 以外の4つは互いに重ならず、すべてのプロジェクトがどれか1つに入る
export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'llm', label: 'LLM & Agents' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'tool', label: 'Dev Tools' },
  { id: 'product', label: 'Products' },
];

// 絞り込みの判定（上から順に最初に当たったもの）:
//   ① tags に画像系のタグがあれば Computer Vision
//   ② tags にエージェント系のタグがあるか、category が 'ml'（①に当たらないモデル開発は LLM 系）なら LLM & Agents
//   ③ 残りは category で分ける: 'tool' → Dev Tools、'product' → Products
const VISION_TAGS = ['Vision Transformer', 'DINOv2', 'YOLOv8', 'Object Detection', 'Stable Diffusion XL'];
const AGENT_TAGS = ['Tool Calling', 'Claude Code (GUI Agent)', 'GUI Automation'];
const CATEGORY_FILTER = { tool: 'tool', product: 'product' };

export const filterFor = (project) => {
  const tags = project.tags ?? [];
  if (tags.some((tag) => VISION_TAGS.includes(tag))) return 'cv';
  if (project.category === 'ml' || tags.some((tag) => AGENT_TAGS.includes(tag))) return 'llm';
  return CATEGORY_FILTER[project.category] ?? 'product';
};

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  min-height: 40px;
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $active }) => ($active ? '#ffffff' : theme.colors.textSecondary)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) => ($active ? '#ffffff' : theme.colors.primary)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// バッジはタイトルの上段に置く。横並びにすると長いタイトルが極端に折り返される
const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.45;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `2px ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  white-space: nowrap;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// 畳んだ状態で出す「作ったもの」の1行（summary.built か story の headline）
const Built = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

// 畳んだ状態で出す結果は1文だけ（全文は「詳しく」の中）
const ResultRow = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

const ResultLabel = styled.span`
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 2px;
`;

// 「詳しく」の中身。課題 → 担当 → 技術 → 結果 の4行
const DetailList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const DetailLabel = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 2px;
  white-space: nowrap;
`;

const DetailValue = styled.dd`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const DiagramBlock = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const DiagramLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 4px;
`;

// 個別ページ（/projects/:id）へのリンク。href を持たせて通常のリンクとしても動くようにし、
// onOpenProject があるときだけ画面遷移をルーターに任せる（Router の外でも描画できるようにするため）
const DetailLink = styled.a`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ProjectDetailLink = ({ id, onOpenProject }) => (
  <DetailLink
    href={`/projects/${id}`}
    onClick={(e) => {
      if (!onOpenProject) return;
      e.preventDefault();
      onOpenProject(id);
    }}
  >
    詳細 →
  </DetailLink>
);

// 採用担当がカード単位で「これは何の系統か」を1秒で判別できるようにするラベル
const CATEGORY_LABELS = {
  ml: 'Model / Research',
  tool: 'Dev Tool',
  product: 'Product',
};

// 「。」で区切った最初の1文だけを返す（畳んだカードの結果行に使う）
export const firstSentence = (text = '') => {
  const end = text.indexOf('。');
  return end === -1 ? text : text.slice(0, end + 1);
};

// summary 形式（個人開発）と story 形式（業務案件）で参照するフィールドを揃える
const builtLine = (project) => (project.story ? project.headline : project.summary?.built);
const resultText = (project) => (project.story ? project.story.results : project.summary?.result);
const detailRows = (project) =>
  project.story
    ? [
        ['課題', project.story.problem],
        ['担当', project.story.role],
        ['技術', project.story.approach],
        ['結果', project.story.results],
      ]
    : [
        ['課題', project.summary?.problem],
        ['担当', project.summary?.role],
        ['技術', project.summary?.tech],
        ['結果', project.summary?.result],
      ];

const ProjectDetails = ({ project }) => (
  <Disclosure label="詳しく">
    <DetailList>
      {detailRows(project).map(([label, value]) =>
        value ? (
          <React.Fragment key={label}>
            <DetailLabel>{label}</DetailLabel>
            <DetailValue>{value}</DetailValue>
          </React.Fragment>
        ) : null
      )}
    </DetailList>
    {project.diagram && (
      <DiagramBlock>
        <DiagramLabel>システム構成</DiagramLabel>
        <MermaidDiagram
          chart={project.diagram.chart}
          caption={project.diagram.caption}
          alt={project.diagram.alt}
        />
      </DiagramBlock>
    )}
  </Disclosure>
);

const ProjectsSection = ({ onOpenProject }) => {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => filterFor(p) === filter);

  return (
    <Section id="projects">
      <SectionTitle title="Projects" subtitle="モデル開発・ツール・プロダクト" />
      <FilterRow role="group" aria-label="プロジェクトの絞り込み">
        {FILTERS.map((f) => (
          <FilterButton
            key={f.id}
            type="button"
            $active={filter === f.id}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </FilterButton>
        ))}
      </FilterRow>
      <ProjectsGrid>
        {visible.map((project) => (
          <Card key={project.id}>
            <ProjectHeader>
              <BadgeRow>
                {CATEGORY_LABELS[project.category] && (
                  <CategoryBadge>{CATEGORY_LABELS[project.category]}</CategoryBadge>
                )}
                {project.category2 === 'hackathon' && <CategoryBadge>Hackathon</CategoryBadge>}
              </BadgeRow>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectHeader>
            {builtLine(project) && <Built>{builtLine(project)}</Built>}
            {resultText(project) && (
              <ResultRow>
                <ResultLabel>結果</ResultLabel>
                <span>{firstSentence(resultText(project))}</span>
              </ResultRow>
            )}
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Links>
              {project.github && (
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </ProjectLink>
              )}
              {project.demo && (
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Demo
                </ProjectLink>
              )}
              {project.blog && (
                <ProjectLink
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Blog
                </ProjectLink>
              )}
              <ProjectDetailLink id={project.id} onOpenProject={onOpenProject} />
            </Links>
            <ProjectDetails project={project} />
          </Card>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default ProjectsSection;
