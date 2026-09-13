import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/profile';
import SocialIcons from '../ui/SocialIcons';
import Button from '../ui/Button';

// Hero は「何者か → 証拠」の2段だけ。挨拶・タイピング肩書き・所属の行は置かない
// 全画面にすると下に大きな空白が出るため、高さは 80vh に抑える（上は固定ヘッダー分を多めに取る）
const HeroWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.xl} ${theme.spacing['2xl']}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `5.5rem ${theme.spacing.md} ${theme.spacing['2xl']}`};
  }
  position: relative;
  overflow: hidden;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, ${({ theme }) => `${theme.colors.primary}15`} 0%, transparent 50%),
              radial-gradient(ellipse at 70% 50%, ${({ theme }) => `${theme.colors.primaryDark}10`} 0%, transparent 50%);
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

// 固定肩書き。5秒で読める1つだけ
const Title = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Tagline = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  max-width: 640px;
`;

// モバイルでは句読点の位置で改行する（途中の単語で折り返させない）
const TaglinePart = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

// 実績チップ3つ。数字を主役にし、指標名と対象は小さく添える
const ProofRow = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 720px;

  /* モバイルは1列。3列だと数字が折れて読めない */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Proof = styled.li`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => `${theme.colors.surface}80`};
`;

const ProofAxis = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.accentText};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ProofValue = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ProofMetric = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const SocialWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroLinks = profile.social.filter((s) => profile.heroSocial.includes(s.platform));

  return (
    <HeroWrapper id="hero">
      <HeroBg />
      <HeroContent variants={containerVariants} initial="hidden" animate="visible">
        <Name variants={itemVariants}>{profile.name}</Name>
        <Title variants={itemVariants}>{profile.title}</Title>
        <Tagline variants={itemVariants}>
          {profile.tagline.map((part) => (
            <TaglinePart key={part}>{part}</TaglinePart>
          ))}
        </Tagline>
        <ProofRow variants={itemVariants} aria-label="主な実績">
          {profile.proofPoints.map((p) => (
            <Proof key={p.axis}>
              <ProofAxis>{p.axis}</ProofAxis>
              <ProofValue>{p.value}</ProofValue>
              <ProofMetric>{p.metric}</ProofMetric>
            </Proof>
          ))}
        </ProofRow>
        <SocialWrapper variants={itemVariants}>
          <SocialIcons links={heroLinks} />
        </SocialWrapper>
        <ButtonGroup variants={itemVariants}>
          <Button onClick={() => scrollToSection('experience')} href="#experience">
            経歴を見る
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} href="#contact">
            お問い合わせ
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
