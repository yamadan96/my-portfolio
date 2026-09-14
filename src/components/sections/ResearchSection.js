import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { mobileTapArea } from '../../styles/tapArea';
import { conferencePapers } from '../../data/publications';
import research, { researchFocusShort } from '../../data/research';

// トップページには学会発表3件を「年 · 何が分かったか · 条件 · 会場と発表形式」の行で出す。
// 要旨・先行報告との比較・資料は /research と各個別ページ（/research/:id）に置く。
// h2 は "Research" のまま（MainPage.test がセクションの順番を見る）。
const Rows = styled.ol`
  list-style: none;
  max-width: 900px;
  padding: 0;
  margin: 0 auto;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 3px;
`;

// 研究テーマの短いラベル（見出しではない）
const Topic = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.accentText};
`;

// 見出しは「何が分かったか」。題名ではない
const Finding = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.45;
  margin: 2px 0 ${({ theme }) => theme.spacing.xs};
`;

// 測定条件1行。数字だけが独り歩きしないよう必ず添える
const Conditions = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const PubTitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const Badges = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => `${theme.spacing.xs} 0 0`};
`;

const Badge = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `2px ${theme.spacing.sm}`};
`;

const Note = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const RowLink = styled(motion.a)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accentText};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.xs};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${mobileTapArea}
`;

// 件数と投稿中（査読中）の国際会議を1行で添える
const FooterLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const MoreLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

// <a> ではなく button で /research へ遷移する（ProjectsGridSection の MoreLink と同じ見た目）
const MoreLink = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const submitting = research.filter((item) => item.status === 'submitted');
const submittingVenues = submitting.map((item) => item.shortVenue || item.venue).join('／');

const ResearchSection = () => {
  const navigate = useNavigate();
  // 1つの研究を複数の会場で発表することがあるため、会場数はデータから数える
  const presentationCount = conferencePapers.reduce(
    (total, pub) => total + (pub.presentations ? pub.presentations.length : 1),
    0,
  );

  return (
    <Section id="research">
      <SectionTitle title="Research" subtitle={researchFocusShort} />
      <Rows>
        {conferencePapers.map((pub) => (
          <Row key={pub.id}>
            <Year>{pub.year}</Year>
            <div>
              <Topic>{pub.shortTitle}</Topic>
              <Finding>{pub.finding}</Finding>
              <Conditions>{pub.conditions}</Conditions>
              <PubTitle>発表題目：{pub.title}</PubTitle>
              {pub.presentations && (
                <Badges aria-label="発表の場">
                  {pub.presentations.map((p) => (
                    <Badge key={p.venue}>
                      {p.venue} · {p.type}
                    </Badge>
                  ))}
                </Badges>
              )}
              {pub.topNote && <Note>{pub.topNote}</Note>}
              <RowLink onClick={() => navigate(`/research/${pub.id}`)} whileHover={{ x: 4 }}>
                詳細を見る →
              </RowLink>
            </div>
          </Row>
        ))}
      </Rows>
      <FooterLine>
        {conferencePapers.length}件の研究を{presentationCount}会場で発表
        {submitting.length > 0 && ` · ${submittingVenues} 投稿済み（査読中）`}
      </FooterLine>
      <MoreLinks>
        <MoreLink
          type="button"
          onClick={() => navigate('/research')}
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          すべての発表・原稿・要旨を見る →
        </MoreLink>
      </MoreLinks>
    </Section>
  );
};

export default ResearchSection;
