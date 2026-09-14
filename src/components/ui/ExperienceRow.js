import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tag from './Tag';
import { mobileTapArea } from '../../styles/tapArea';

// トップページの職務経歴1件。縦線とドットのタイムラインはやめ、「期間 | 本文」の2カラムの行にする。
// 本文は 社名 → 役割 → 作ったもの（1行）→ 数字（カード）→ 体制 → 根拠リンク → タグ・詳細 の順。
// 数字は文から取り出して metrics に置き、指標名と条件をラベルに添える（データ側で管理する）
const Row = styled(motion.article)`
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => `${theme.spacing.md} 0`};
  }
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 4px;
`;

const CompanyLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
`;

const SiteLink = styled.a`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 15px;
    height: 15px;
  }

  ${mobileTapArea}
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// 「何を作ったか」の1行。数字は入れない
const Built = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
`;

const Metrics = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

const Metric = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
`;

const MetricValue = styled.strong`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.3;
`;

const MetricLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

// 数値指標を持たない経歴の結果1行と、体制の1行
const MutedLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const Evidence = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const EvidenceLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentText};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${mobileTapArea}
`;

const RowFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const DetailLink = styled(motion.a)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accentText};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${mobileTapArea}
`;

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 期間の末尾の「（2ヶ月）」「（2年10ヶ月）」は行では落とす（詳細ページでは残す）。データは変更しない
export const displayPeriod = (period) => (period || '').replace(/（[^）]*）\s*$/, '');

const ExperienceRow = ({ item, onDetailClick }) => {
  const top = item.top || {};
  const tags = top.tags ?? item.tags ?? [];

  return (
    <Row
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Period>{displayPeriod(item.period)}</Period>
      <div>
        <CompanyLine>
          <Company>{item.company}</Company>
          {item.url && (
            <SiteLink
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.company} のサイト`}
            >
              <ExternalIcon />
            </SiteLink>
          )}
        </CompanyLine>
        <Role>{item.role}</Role>
        {(top.built || item.oneLiner || item.description) && (
          <Built>{top.built || item.oneLiner || item.description}</Built>
        )}
        {top.metrics && top.metrics.length > 0 && (
          <Metrics>
            {top.metrics.map((m) => (
              <Metric key={m.label}>
                <MetricValue>{m.value}</MetricValue>
                <MetricLabel>{m.label}</MetricLabel>
              </Metric>
            ))}
          </Metrics>
        )}
        {top.resultLine && <MutedLine>{top.resultLine}</MutedLine>}
        {top.roleLine && <MutedLine>{top.roleLine}</MutedLine>}
        {(item.blogUrl || item.mediaLinks) && (
          <Evidence>
            {item.blogUrl && (
              <EvidenceLink href={item.blogUrl} target="_blank" rel="noopener noreferrer">
                📝 ブログ記事
              </EvidenceLink>
            )}
            {item.mediaLinks &&
              item.mediaLinks.map((ml) => (
                <EvidenceLink key={ml.label} href={ml.url} target="_blank" rel="noopener noreferrer">
                  📰 {ml.label}
                </EvidenceLink>
              ))}
          </Evidence>
        )}
        <RowFooter>
          <Tags>
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          {item.hasDetail && onDetailClick && (
            <DetailLink onClick={() => onDetailClick(item.id)} whileHover={{ x: 4 }}>
              詳細を見る →
            </DetailLink>
          )}
        </RowFooter>
      </div>
    </Row>
  );
};

export default ExperienceRow;
