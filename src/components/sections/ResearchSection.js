import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import publications from '../../data/publications';
import research from '../../data/research';

// トップページに出すのは発表済み・確定済みの publications のみ。
// 各カードの本文は highlight の1行だけにし、要旨・引用・詳細説明は /research に置く。
const MAX_TAGS = 5;

// '学会発表（口頭）' '学会発表（口頭・ポスター）' など、学会発表系はまとめて緑バッジにする
const isConference = (type) => typeof type === 'string' && type.startsWith('学会発表');

// pub.link は基本的に発表ページだが、卒業論文は GitHub リポジトリを指しているので表記を分ける
const linkLabel = (url) => (url.includes('github.com') ? 'GitHub リポジトリ' : '発表ページ');

const isPdf = (url) => url.toLowerCase().endsWith('.pdf');

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme, $type }) =>
    isConference($type) ? `${theme.colors.success}20` : `${theme.colors.primary}20`};
  color: ${({ theme, $type }) =>
    isConference($type) ? theme.colors.success : theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ResearchTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Venue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

// 本文は1行（pub.highlight）。長い説明は /research 側に置く
const Highlight = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const MaterialsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const MaterialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}20`};
    border-color: ${({ theme }) => theme.colors.primary};
  }
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
      <SectionTitle title="Research" subtitle="学会発表4件と学位論文" />
      <ResearchGrid>
        {publications.map((pub) => {
          const materials = pub.materials || [];
          const tags = (pub.tags || []).slice(0, MAX_TAGS);
          const hasLinks = Boolean(pub.link) || materials.length > 0;

          return (
            <Card key={pub.id}>
              <TypeBadge $type={pub.type}>{pub.type}</TypeBadge>
              <ResearchTitle>{pub.title}</ResearchTitle>
              <Venue>
                {(pub.shortVenue || pub.venue)} · {pub.year}
              </Venue>
              {pub.highlight && <Highlight>{pub.highlight}</Highlight>}
              {tags.length > 0 && (
                <Tags>
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
              )}
              {hasLinks && (
                <MaterialsRow>
                  {pub.link && (
                    <MaterialLink href={pub.link} target="_blank" rel="noopener noreferrer">
                      {linkLabel(pub.link)} ↗
                    </MaterialLink>
                  )}
                  {materials.map((mat) => (
                    <MaterialLink
                      key={mat.url}
                      href={mat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isPdf(mat.url) ? `📄 ${mat.label}` : `${mat.label} ↗`}
                    </MaterialLink>
                  ))}
                </MaterialsRow>
              )}
            </Card>
          );
        })}
      </ResearchGrid>
      {submitting.length > 0 && (
        <SubmittingNote>
          国際会議へ投稿中（査読中）— {submittingVenues}
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
