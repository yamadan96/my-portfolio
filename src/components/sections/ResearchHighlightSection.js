import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { Chip, MoreRow, TextLink } from '../ui/Editorial';
import publications from '../../data/publications';
import research from '../../data/research';

// 学会発表を1件1行で。読むのは タイトル → 結果 → 原稿リンク の順。
// 手法・実験条件・引用形式は /research が担当。
const TOP_COUNT = 3;

const List = styled.ol`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Venue = styled.p`
  padding-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
`;

const Result = styled.p`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Submitting = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// 学会名だけを残し、開催地・回次・発表形式は落とす
const shortVenue = (venue) => venue.split(/（|／|\(/)[0].trim();

const materialsFor = (pub) => {
  const files = (pub.materials || []).filter((m) => m.url.startsWith('/papers/'));
  return pub.link ? [...files, { label: '発表ページ', url: pub.link }] : files;
};

// 「ポスターPDF（知覚AIフォーラム）」→「ポスターPDF」
const shortLabel = (label) => label.replace(/[（(].*$/, '');

const ResearchHighlightSection = () => {
  const navigate = useNavigate();
  const items = publications.slice(0, TOP_COUNT);
  const submitting = research.filter((r) => r.status === 'submitting');

  return (
    <Section id="research">
      <SectionTitle index="02" eyebrow="Research" title="研究・発表" />
      <List>
        {items.map((pub) => (
          <Row key={pub.id}>
            <Venue>
              {pub.year}
              <br />
              {shortVenue(pub.venue)}
            </Venue>
            <div>
              <Title>{pub.title}</Title>
              <Result>{pub.highlight}</Result>
              <Links>
                {materialsFor(pub).map((m) => (
                  <Chip key={m.url} href={m.url} target="_blank" rel="noopener noreferrer">
                    {shortLabel(m.label)}
                  </Chip>
                ))}
              </Links>
            </div>
          </Row>
        ))}
      </List>
      {submitting.length > 0 && (
        <Submitting>
          国際会議 {submitting.length}件へ投稿準備中 — {submitting.map((r) => r.shortVenue).join('／')}
        </Submitting>
      )}
      <MoreRow>
        <TextLink onClick={() => navigate('/research')}>すべての発表と原稿を見る →</TextLink>
      </MoreRow>
    </Section>
  );
};

export default ResearchHighlightSection;
