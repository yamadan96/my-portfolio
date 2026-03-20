import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import experiences from '../data/experiences';
import Tag from '../components/ui/Tag';
import Button from '../components/ui/Button';

const DetailWrapper = styled.div`
  max-width: 800px;
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find((e) => e.id === id);

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

  return (
    <DetailWrapper>
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
    </DetailWrapper>
  );
};

export default ExperienceDetail;
