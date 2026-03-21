import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import experiences from '../data/experiences';
import Tag from '../components/ui/Tag';
import Button from '../components/ui/Button';

const DetailWrapper = styled.div`
  max-width: ${({ $hasProjects }) => $hasProjects ? '1000px' : '800px'};
  margin: 0 auto;
  padding: ${({ theme }) => `120px ${theme.spacing.xl} ${theme.spacing['4xl']}`};
`;

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Company = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 800;
  margin: ${({ theme }) => theme.spacing.sm} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
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

const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Achievement = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
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

/* プロジェクトカード関連のスタイル */
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectIcon = styled.span`
  font-size: 1.8rem;
  flex-shrink: 0;
`;

const ProjectCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
`;

const ProjectCardClient = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin: 2px 0 0;
`;

const ProjectCardCategory = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => `${theme.colors.primary}15`};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectCardPeriod = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectCardSummary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

const ProjectCardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const MiniTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

/* プロジェクト詳細モーダル */
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing['2xl']};
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing['2xl']};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 800;
  margin: 0 0 4px;
`;

const ModalClient = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

const ModalMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const ModalSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ModalSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const ModalDetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ModalDetailItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const ImpactBox = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => `${theme.colors.success}10`};
  border-left: 3px solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalClose onClick={onClose}>×</ModalClose>
        <ModalHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '2rem' }}>{project.icon}</span>
            <ModalTitle>{project.name}</ModalTitle>
          </div>
          <ModalClient>{project.client}</ModalClient>
          <ModalMeta>
            <ProjectCardCategory>{project.category}</ProjectCardCategory>
            <ProjectCardPeriod style={{ margin: 0 }}>{project.period}</ProjectCardPeriod>
          </ModalMeta>
        </ModalHeader>

        <ModalSection>
          <ModalSectionTitle>概要</ModalSectionTitle>
          <Overview style={{ fontSize: '0.9rem' }}>{project.summary}</Overview>
        </ModalSection>

        <ModalSection>
          <ModalSectionTitle>取り組み内容</ModalSectionTitle>
          <ModalDetailList>
            {project.details.map((detail, i) => (
              <ModalDetailItem key={i}>{detail}</ModalDetailItem>
            ))}
          </ModalDetailList>
        </ModalSection>

        {project.impact && (
          <ModalSection>
            <ModalSectionTitle>成果・インパクト</ModalSectionTitle>
            <ImpactBox>{project.impact}</ImpactBox>
          </ModalSection>
        )}

        <ModalSection>
          <ModalSectionTitle>技術スタック</ModalSectionTitle>
          <Tags>
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </Tags>
        </ModalSection>
      </ModalContent>
    </ModalOverlay>
  );
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find((e) => e.id === id);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!experience || !experience.details) {
    return (
      <DetailWrapper>
        <NotFound>
          <h2>経験の詳細が見つかりません</h2>
          <Button onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
            トップに戻る
          </Button>
        </NotFound>
      </DetailWrapper>
    );
  }

  const { details } = experience;
  const hasProjects = details.projects && details.projects.length > 0;

  return (
    <DetailWrapper $hasProjects={hasProjects}>
      <BackButton onClick={() => navigate('/')} whileHover={{ x: -4 }}>
        ← 戻る
      </BackButton>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Header variants={itemVariants}>
          <Period>{experience.period}</Period>
          <Company>{experience.company}</Company>
          <Role>{experience.role}</Role>
        </Header>

        <SectionBlock variants={itemVariants}>
          <SectionLabel>概要</SectionLabel>
          <Overview>{details.overview}</Overview>
        </SectionBlock>

        {hasProjects && (
          <SectionBlock variants={itemVariants}>
            <SectionLabel>プロジェクト一覧（{details.projects.length}件）</SectionLabel>
            <ProjectsGrid>
              {details.projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCardHeader>
                    <ProjectIcon>{project.icon}</ProjectIcon>
                    <div>
                      <ProjectCardTitle>{project.name}</ProjectCardTitle>
                      <ProjectCardClient>{project.client}</ProjectCardClient>
                    </div>
                  </ProjectCardHeader>
                  <ProjectCardCategory>{project.category}</ProjectCardCategory>
                  <ProjectCardPeriod>{project.period}</ProjectCardPeriod>
                  <ProjectCardSummary>{project.summary}</ProjectCardSummary>
                  <ProjectCardFooter>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <MiniTag key={tech}>{tech}</MiniTag>
                    ))}
                    {project.techStack.length > 4 && (
                      <MiniTag>+{project.techStack.length - 4}</MiniTag>
                    )}
                  </ProjectCardFooter>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </SectionBlock>
        )}

        <SectionBlock variants={itemVariants}>
          <SectionLabel>担当内容</SectionLabel>
          <List>
            {details.responsibilities.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </List>
        </SectionBlock>

        <SectionBlock variants={itemVariants}>
          <SectionLabel>成果</SectionLabel>
          <Achievement>{details.achievements}</Achievement>
        </SectionBlock>

        <SectionBlock variants={itemVariants}>
          <SectionLabel>技術スタック</SectionLabel>
          <Tags>
            {details.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </Tags>
        </SectionBlock>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </DetailWrapper>
  );
};

export default ExperienceDetail;
