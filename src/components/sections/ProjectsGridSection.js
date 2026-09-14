import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import projects from '../../data/projects';

// ランディングページのカードに載せるタグの上限（残りは個別ページに出る）
const MAX_TAGS_PER_CARD = 3;

// 代表4件なので PC では 2×2 に揃える（3列だと1件だけ2段目に落ちる）
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

// カード全体を個別ページへのリンクにする。入れ子の <a> を避けるため、
// 題名のリンクを ::after でカード全面まで広げ、外部リンクだけをその上に重ねる
const ClickableCard = styled(Card)`
  position: relative;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
`;

const StretchedLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }
`;

// 根拠1行（構成・データ・実行環境）。数字は入れない
const Evidence = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// 本文は summary.built の1文をそのまま出す（途中で省略しない）
const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
  gap: ${({ theme }) => theme.spacing.md};
  /* 全面に広げた題名リンクより手前に出す */
  position: relative;
  z-index: 1;
`;

const DetailLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
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

// グリッド下のサブページ導線（テキストリンク風ボタン）
const MoreLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

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

const featuredProjects = projects.filter((p) => p.featured === true);

const ProjectsGridSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="projects">
      <SectionTitle
        title="Projects"
        subtitle={`個人開発・研究実装（代表${featuredProjects.length}件）`}
      />
      <ProjectsGrid>
        {featuredProjects.map((project) => (
          <ClickableCard key={project.id}>
            <ProjectHeader>
              <ProjectTitle>
                <StretchedLink to={`/projects/${project.id}`}>{project.title}</StretchedLink>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDescription>
              {project.summary?.built ?? project.description}
            </ProjectDescription>
            {project.evidence && <Evidence>{project.evidence}</Evidence>}
            <Tags>
              {(project.tags ?? []).slice(0, MAX_TAGS_PER_CARD).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Links>
              <DetailLink to={`/projects/${project.id}`}>詳細を見る →</DetailLink>
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
            </Links>
          </ClickableCard>
        ))}
      </ProjectsGrid>
      <MoreLinks>
        <MoreLink type="button" onClick={() => navigate('/work')} whileHover={{ x: 2 }}>
          すべての個人開発と技術詳細を見る →
        </MoreLink>
        <MoreLink type="button" onClick={() => navigate('/more')} whileHover={{ x: 2 }}>
          OSS・技術記事を見る →
        </MoreLink>
      </MoreLinks>
    </Section>
  );
};

export default ProjectsGridSection;
