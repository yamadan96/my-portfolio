import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import Disclosure from '../ui/Disclosure';
import MermaidDiagram from '../ui/MermaidDiagram';
import projects from '../../data/projects';

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

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.lg};
`;

const OtherList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const OtherCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
`;

const OtherTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: 4px;
`;

// 採用担当がカード単位で「これは何の系統か」を1秒で判別できるようにするラベル
const CATEGORY_LABELS = {
  ml: 'Model / Research',
  tool: 'Dev Tool',
  product: 'Product',
};

// レベル1（概要）。初見の読者が30秒で把握できる粒度に固定した5項目。
const SUMMARY_FIELDS = [
  ['built', '作ったもの'],
  ['problem', '課題'],
  ['role', '担当'],
  ['tech', '技術'],
  ['result', '結果'],
];

const SummaryList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  margin: ${({ theme }) => `${theme.spacing.md} 0 0`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const SummaryLabel = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 2px;
  white-space: nowrap;
`;

const SummaryValue = styled.dd`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const TechBlock = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const TechLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 4px;
`;

const TechBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

const ProjectSummary = ({ summary }) => (
  <SummaryList>
    {SUMMARY_FIELDS.map(([key, label]) =>
      summary[key] ? (
        <React.Fragment key={key}>
          <SummaryLabel>{label}</SummaryLabel>
          <SummaryValue>{summary[key]}</SummaryValue>
        </React.Fragment>
      ) : null
    )}
  </SummaryList>
);

const TechnicalDetails = ({ blocks, diagram }) => (
  <Disclosure label="システム構成図・技術詳細を見る">
    {diagram && (
      <TechBlock>
        <TechLabel>システム構成</TechLabel>
        <MermaidDiagram chart={diagram.chart} caption={diagram.caption} alt={diagram.alt} />
      </TechBlock>
    )}
    {blocks.map((b) => (
      <TechBlock key={b.label}>
        <TechLabel>{b.label}</TechLabel>
        <TechBody>{b.body}</TechBody>
      </TechBlock>
    ))}
  </Disclosure>
);

const ProjectsSection = () => (
  <Section id="projects">
    <SectionTitle title="Projects" subtitle="モデル開発・ツール・プロダクト" />
    <ProjectsGrid>
      {projects.filter((p) => p.featured).map((project) => (
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
          {project.summary && <ProjectSummary summary={project.summary} />}
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
          </Links>
          {(project.technical?.length > 0 || project.diagram) && (
            <TechnicalDetails
              blocks={[{ label: '概要', body: project.description }, ...(project.technical || [])]}
              diagram={project.diagram}
            />
          )}
        </Card>
      ))}
    </ProjectsGrid>
    <SubHeading>その他のプロジェクト</SubHeading>
    <OtherList>
      {projects.filter((p) => !p.featured).map((project) => (
        <OtherCard key={project.id}>
          <OtherTitle>{project.title}</OtherTitle>
          {project.summary && <ProjectSummary summary={project.summary} />}
          <Links>
            {project.github && (
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
            )}
            {project.demo && (
              <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </ProjectLink>
            )}
          </Links>
          {(project.technical?.length > 0 || project.diagram) && (
            <TechnicalDetails
              blocks={[{ label: '概要', body: project.description }, ...(project.technical || [])]}
              diagram={project.diagram}
            />
          )}
        </OtherCard>
      ))}
    </OtherList>
  </Section>
);

export default ProjectsSection;
