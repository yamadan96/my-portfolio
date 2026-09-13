import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import publications from '../data/publications';
import Tag from '../components/ui/Tag';
import { presentationBadge } from './ResearchPage';

// Level 3: 1件の発表を1ページで読む（/research/:id）。
// 見出しは 研究課題 → データセット → 手法 → 実験 → 結果 → 解釈 → 資料 の順で固定。
// 本文は publications.js の detail（既存の abstract・description・metrics を並べ直したもの）から、
// 資料は link・materials・citation から組む。detail に無い項目（卒業論文の「解釈」など）は見出しごと出さない。
// 見た目は ProjectDetail と同じ部品（余白・見出し・戻りリンク）に揃えている。
const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => `120px ${theme.spacing.xl} ${theme.spacing['4xl']}`};
`;

const BackRow = styled.div`
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

const Badge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `2px ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.success}20`};
  color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
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

const Venue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
`;

/* claim: 1行の主張。題名の直下に置き、本文を読む前に結論が分かるようにする（ProjectDetail の headline と同じ扱い） */
const ClaimStrip = styled.p`
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

/* 原稿の Abstract をそのまま引用する（英語のまま） */
const Abstract = styled.blockquote`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-left: 3px solid ${({ theme }) => `${theme.colors.primary}55`};
  background: ${({ theme }) => `${theme.colors.primary}08`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

const AbstractLabel = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionBlock = styled(motion.section)`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionLabel = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.85;
  margin: 0;
`;

/* 結果の数値カード（publications.js の metrics）。本文の前に置く */
const Metrics = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0;
  margin: ${({ theme }) => `0 0 ${theme.spacing.lg}`};
`;

const Metric = styled.li`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const MetricValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  margin: 0;
`;

const MetricLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  margin: ${({ theme }) => `${theme.spacing.xs} 0 0`};
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

const Citation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: ${({ theme }) => `${theme.spacing.md} 0 0`};
  font-style: italic;
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

// detail の見出し。この順番で描画する（研究課題 → データセット → 手法 → 実験 → 結果 → 解釈）。資料は最後に固定
export const DETAIL_FIELDS = [
  ['question', '研究課題（Research Question）'],
  ['dataset', 'データセット（Dataset）'],
  ['method', '手法（Method）'],
  ['experiments', '実験（Experiments）'],
  ['results', '結果（Results）'],
  ['interpretation', '解釈（Interpretation）'],
];

export const MATERIALS_LABEL = '資料（Materials）';

// pub.link は基本的に発表ページだが、卒業論文は GitHub リポジトリを指しているので表記を分ける（ResearchSection と同じ規則）
const linkLabel = (url) => (url.includes('github.com') ? 'GitHub リポジトリ' : '発表ページ');

// 発表ページ → 原稿PDF・スライド・ポスター・研究業績DB の順にひとつの一覧にまとめる
const collectMaterials = (pub) => [
  ...(pub.link ? [{ label: linkLabel(pub.link), url: pub.link }] : []),
  ...(pub.materials || []),
];

const ResearchDetail = () => {
  const { id } = useParams();
  const pub = publications.find((p) => p.id === id);

  // 一覧の下の方の行から遷移すると前ページのスクロール位置が残るので、先頭から読めるようにする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pub) {
    return (
      <DetailWrapper>
        <NotFound>
          <h2>研究が見つかりません</h2>
          <p style={{ marginTop: '1rem' }}>
            <BackLink to="/research">← Research へ戻る</BackLink>
          </p>
        </NotFound>
      </DetailWrapper>
    );
  }

  const detail = pub.detail || {};
  const materials = collectMaterials(pub);
  const hasMaterials = materials.length > 0 || Boolean(pub.citation);

  return (
    <DetailWrapper>
      <BackRow>
        <BackLink to="/research">← Research へ戻る</BackLink>
      </BackRow>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Header variants={itemVariants}>
          <Badge>{presentationBadge(pub.type) || pub.type}</Badge>
          <Title>{pub.title}</Title>
          <Venue>
            {pub.venue} · {pub.year}
          </Venue>
          {pub.claim && <ClaimStrip>{pub.claim}</ClaimStrip>}
          {pub.tags?.length > 0 && (
            <Tags>
              {pub.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          )}
          {pub.abstract && (
            <Abstract>
              <AbstractLabel>Abstract（原稿より）</AbstractLabel>
              {pub.abstract}
            </Abstract>
          )}
        </Header>

        {DETAIL_FIELDS.map(([key, label]) =>
          detail[key] ? (
            <SectionBlock key={key} variants={itemVariants}>
              <SectionLabel>{label}</SectionLabel>
              {/* 結果には数値カード（metrics）を本文の前に置く */}
              {key === 'results' && pub.metrics?.length > 0 && (
                <Metrics>
                  {pub.metrics.map((m) => (
                    <Metric key={m.label}>
                      <MetricValue>{m.value}</MetricValue>
                      <MetricLabel>{m.label}</MetricLabel>
                    </Metric>
                  ))}
                </Metrics>
              )}
              <Body>{detail[key]}</Body>
            </SectionBlock>
          ) : null
        )}

        {hasMaterials && (
          <SectionBlock variants={itemVariants}>
            <SectionLabel>{MATERIALS_LABEL}</SectionLabel>
            {materials.length > 0 && (
              <Links>
                {materials.map((mat) => (
                  <ExternalLink key={mat.url} href={mat.url} target="_blank" rel="noopener noreferrer">
                    {mat.label} ↗
                  </ExternalLink>
                ))}
              </Links>
            )}
            {pub.citation && <Citation>{pub.citation}</Citation>}
          </SectionBlock>
        )}
      </motion.div>
    </DetailWrapper>
  );
};

export default ResearchDetail;
