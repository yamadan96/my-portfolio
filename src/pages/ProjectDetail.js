import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import Tag from '../components/ui/Tag';
import Disclosure from '../components/ui/Disclosure';
import MermaidDiagram from '../components/ui/MermaidDiagram';
import { SUMMARY_FIELDS } from './ExperienceDetail';

// Level 3: 1件のプロジェクトを1ページで読む（/projects/:id）。
// データは2形式ある。
//   - story 形式（業務案件）: headline（1行の要約）＋ 課題 → 制約 → 担当 → アプローチ → 結果 → 学び、その後に technical（証拠）
//   - summary / technical 形式（個人開発・研究実装）: 5項目の概要 ＋ 技術詳細
// /work の一覧から来る読者と、経歴ページ（/experience/:id）のカードから来る読者の両方が戻れるようにする。
// 見た目は ExperienceDetail と同じ部品（余白・見出し・概要リスト）に揃えている。
const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => `120px ${theme.spacing.xl} ${theme.spacing['4xl']}`};
`;

const BackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

// 採用担当がカード単位で「これは何の系統か」を1秒で判別できるようにするラベル（ProjectsSection と同じ）
const CATEGORY_LABELS = {
  ml: 'Model / Research',
  tool: 'Dev Tool',
  product: 'Product',
};

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

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 800;
  line-height: 1.3;
  margin: ${({ theme }) => theme.spacing.sm} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

/* headline: 「前提 → 担当 → やり方 → 結果」を1行で。題名の直下に置き、30秒で課題・担当・結果が読めるようにする */
const HeadlineStrip = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
`;

const HeadlineArrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionBlock = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionLabel = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const SummaryList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const SummaryTerm = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 3px;
  white-space: nowrap;
`;

const SummaryDesc = styled.dd`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.85;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

/* story: 6つの見出しを縦に並べる。各項目は1〜3文 */
const StoryList = styled.dl`
  margin: 0;
`;

const StoryTerm = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const StoryDesc = styled.dd`
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.85;
`;

/* 技術詳細（見出し + 本文の行） */
const TechBlock = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const TechLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
`;

const TechBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const NotFound = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// story 形式の見出し。この順番で描画する（課題 → 制約 → 担当 → アプローチ → 結果 → 学び）
export const STORY_FIELDS = [
  ['problem', '課題'],
  ['constraints', '制約'],
  ['role', '担当'],
  ['approach', 'アプローチ'],
  ['results', '結果'],
  ['learned', '学び'],
];

// headline は「 → 」区切りの1行。矢印を色分けして折り返しても読めるようにする
const HEADLINE_SEPARATOR = ' → ';

const Headline = ({ text }) => {
  const parts = text.split(HEADLINE_SEPARATOR);
  return (
    <HeadlineStrip>
      {parts.map((part, i) => (
        <React.Fragment key={part}>
          {i > 0 && <HeadlineArrow aria-hidden="true">→</HeadlineArrow>}
          <span>{part}</span>
        </React.Fragment>
      ))}
    </HeadlineStrip>
  );
};

// github / demo / links（記事・動画など）をひとつの一覧にまとめる
const collectLinks = (project) => [
  ...(project.github ? [{ label: 'GitHub', url: project.github }] : []),
  ...(project.demo ? [{ label: 'Demo', url: project.demo }] : []),
  ...(project.blog ? [{ label: 'Blog', url: project.blog }] : []),
  ...(project.links || []),
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <DetailWrapper>
        <NotFound>
          <h2>プロジェクトが見つかりません</h2>
          <p style={{ marginTop: '1rem' }}>
            <BackLink to="/work">← All Work へ戻る</BackLink>
          </p>
        </NotFound>
      </DetailWrapper>
    );
  }

  const links = collectLinks(project);
  const hasStory = Boolean(project.story);

  return (
    <DetailWrapper>
      <BackRow>
        <BackLink to="/work">← All Work へ戻る</BackLink>
        {project.experienceId && (
          <BackLink to={`/experience/${project.experienceId}`}>
            ← {project.experienceLabel || '経歴'} の経歴へ
          </BackLink>
        )}
      </BackRow>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Header variants={itemVariants}>
          {CATEGORY_LABELS[project.category] && (
            <CategoryBadge>{CATEGORY_LABELS[project.category]}</CategoryBadge>
          )}
          <Title>{project.title}</Title>
          {/* story 形式は headline が要約の役目を持つので description は出さない（重複を避ける） */}
          {hasStory && project.headline ? (
            <Headline text={project.headline} />
          ) : (
            project.description && <Lead>{project.description}</Lead>
          )}
        </Header>

        {hasStory && (
          <SectionBlock variants={itemVariants}>
            <StoryList>
              {STORY_FIELDS.map(([key, label]) =>
                project.story[key] ? (
                  <React.Fragment key={key}>
                    <StoryTerm>{label}</StoryTerm>
                    <StoryDesc>{project.story[key]}</StoryDesc>
                  </React.Fragment>
                ) : null
              )}
            </StoryList>
          </SectionBlock>
        )}

        {!hasStory && project.summary && (
          <SectionBlock variants={itemVariants}>
            <SectionLabel>概要</SectionLabel>
            <SummaryList>
              {SUMMARY_FIELDS.map(([key, label]) =>
                project.summary[key] ? (
                  <React.Fragment key={key}>
                    <SummaryTerm>{label}</SummaryTerm>
                    <SummaryDesc>{project.summary[key]}</SummaryDesc>
                  </React.Fragment>
                ) : null
              )}
            </SummaryList>
          </SectionBlock>
        )}

        {(project.technical?.length > 0 || project.diagram) && (
          <SectionBlock variants={itemVariants}>
            {project.technical?.length > 0 && <SectionLabel>技術詳細</SectionLabel>}
            {(project.technical || []).map((block) => (
              <TechBlock key={block.label}>
                <TechLabel>{block.label}</TechLabel>
                <TechBody>{block.body}</TechBody>
              </TechBlock>
            ))}
            {/* 構成図は開いたときだけ mermaid を読み込む（カードと同じ扱い） */}
            {project.diagram && (
              <Disclosure label="システム構成図を見る">
                <MermaidDiagram
                  chart={project.diagram.chart}
                  caption={project.diagram.caption}
                  alt={project.diagram.alt}
                />
              </Disclosure>
            )}
          </SectionBlock>
        )}

        {links.length > 0 && (
          <SectionBlock variants={itemVariants}>
            <SectionLabel>リンク</SectionLabel>
            <Links>
              {links.map((link) => (
                <ExternalLink key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </ExternalLink>
              ))}
            </Links>
          </SectionBlock>
        )}

        {project.tags?.length > 0 && (
          <SectionBlock variants={itemVariants}>
            <SectionLabel>タグ</SectionLabel>
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </SectionBlock>
        )}
      </motion.div>
    </DetailWrapper>
  );
};

export default ProjectDetail;
