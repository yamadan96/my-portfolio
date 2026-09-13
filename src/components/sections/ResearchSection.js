import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { conferencePapers } from '../../data/publications';
import research from '../../data/research';

// トップページには学会発表3件を「年 · 短い題名 · 1行の主張」の行で出す。
// 要旨・数値・資料は /research と各個別ページ（/research/:id）に置く。
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

const RowTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.45;
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
`;

// 本文は1行（pub.claim）。長い説明は個別ページ側に置く
const Claim = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`;

// 投稿中（査読中）の国際会議を1行だけ添える
const SubmittingNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const MoreLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
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

  return (
    <Section id="research">
      <SectionTitle title="Research" subtitle="学会発表3件" />
      <Rows>
        {conferencePapers.map((pub) => (
          <Row key={pub.id}>
            <Year>{pub.year}</Year>
            <div>
              <RowTitle>{pub.shortTitle}</RowTitle>
              <Claim>{pub.claim}</Claim>
            </div>
          </Row>
        ))}
      </Rows>
      {submitting.length > 0 && (
        <SubmittingNote>
          国際会議へ投稿済み（査読中）— {submittingVenues}
        </SubmittingNote>
      )}
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
