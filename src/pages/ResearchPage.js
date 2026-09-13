import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubPageHeader from './SubPageHeader';
import { conferencePapers, theses } from '../data/publications';
import research, { researchFocus } from '../data/research';

// Level 2: 研究の一覧。15秒で「何を研究しているか」と「発表3件でそれぞれ何が分かったか」が読めるようにする。
// 順番は Research Focus → Publications（新しい順）→ Thesis → 投稿中の1行。
// 要旨・引用・原稿PDF・細かい数値（検定・LoRA のランク・論文間比較）は個別ページ（/research/:id）に置き、ここには出さない。

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.xl} ${theme.spacing['4xl']}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing['3xl']}`};
  }
`;

const Block = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const BlockTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const Focus = styled.p`
  max-width: 46rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const Rows = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

/* 1発表 = 1行。左に年・形式・短い題名・1行の主張、右に結果カード3枚と個別ページへのリンク */
const Row = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => `${theme.spacing.md} ${theme.spacing['2xl']}`};
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Meta = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Badge = styled.span`
  padding: ${({ theme }) => `2px ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => `${theme.colors.success}20`};
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
`;

const RowTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.45;
  margin: ${({ theme }) => `${theme.spacing.xs} 0`};
`;

const Claim = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    width: 100%;
  }
`;

const Cards = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  margin: 0;

  /* 狭い画面では 9rem 幅のカードを入るだけ並べ、入らなければ折り返す（数値は折り返さないので 7rem だとはみ出す） */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  }
`;

const ResultCard = styled.li`
  min-width: 6.5rem;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
`;

const CardValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin: 0;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const CardLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 2px 0 0;
`;

const DetailLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

/* 投稿中（査読中）の国際会議を1行だけ添える（トップページと同じ文言） */
const SubmittingNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;

// type（'学会発表（口頭・ポスター）' など）から発表形式のバッジ文言を作る。学会発表でなければ null。
// 個別ページ（ResearchDetail）でも同じ規則で出す
export const presentationBadge = (type = '') => {
  const oral = type.includes('口頭');
  const poster = type.includes('ポスター');
  if (oral && poster) return 'Oral / Poster';
  if (oral) return 'Oral';
  if (poster) return 'Poster';
  return null;
};

const submitting = research.filter((item) => item.status === 'submitted');
const submittingVenues = submitting.map((item) => item.shortVenue || item.venue).join('／');

const ResearchPage = () => (
  <>
    <SubPageHeader
      title="Research"
      lead="学会発表3件と学位論文。原稿・スライド・要旨は各項目の詳細ページに置いている。"
    />
    <Wrapper>
      <Block>
        <BlockTitle>Research Focus</BlockTitle>
        <Focus>{researchFocus}</Focus>
      </Block>

      <Block>
        <BlockTitle>Publications</BlockTitle>
        <Rows>
          {conferencePapers.map((pub) => {
            const badge = presentationBadge(pub.type);
            return (
              <Row key={pub.id}>
                <div>
                  <Meta>
                    <Year>{pub.year}</Year>
                    {badge && <Badge>{badge}</Badge>}
                  </Meta>
                  <RowTitle>{pub.shortTitle}</RowTitle>
                  <Claim>{pub.claim}</Claim>
                </div>
                <Aside>
                  {pub.resultCards?.length > 0 && (
                    <Cards>
                      {pub.resultCards.map((card) => (
                        <ResultCard key={card.label}>
                          <CardValue>{card.value}</CardValue>
                          <CardLabel>{card.label}</CardLabel>
                        </ResultCard>
                      ))}
                    </Cards>
                  )}
                  <DetailLink to={`/research/${pub.id}`}>詳細 →</DetailLink>
                </Aside>
              </Row>
            );
          })}
        </Rows>
      </Block>

      {theses.length > 0 && (
        <Block>
          <BlockTitle>Thesis</BlockTitle>
          <Rows>
            {theses.map((pub) => (
              <Row key={pub.id}>
                <div>
                  <Meta>
                    <Year>{pub.year}</Year>
                  </Meta>
                  <RowTitle>{pub.shortTitle}</RowTitle>
                  {pub.keywords?.length > 0 && <Claim>{pub.keywords.join(' / ')}</Claim>}
                </div>
                <Aside>
                  <DetailLink to={`/research/${pub.id}`}>詳細 →</DetailLink>
                </Aside>
              </Row>
            ))}
          </Rows>
        </Block>
      )}

      {submitting.length > 0 && (
        <SubmittingNote>国際会議へ投稿済み（査読中）— {submittingVenues}</SubmittingNote>
      )}
    </Wrapper>
  </>
);

export default ResearchPage;
