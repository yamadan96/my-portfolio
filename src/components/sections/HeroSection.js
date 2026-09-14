import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialIcons from '../ui/SocialIcons';
import profile from '../../data/profile';
import Button from '../ui/Button';

// Hero は「何者か → 証拠」の2段だけ。挨拶・タイピング肩書き・所属の行は置かない。
// 視線の順序は 肩書き（最も濃い）→ 名前 → 実績3件。実績カードは該当の経歴ページへのリンクにする
const HeroWrapper = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `5.5rem ${theme.spacing.xl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `5rem ${theme.spacing.md} ${theme.spacing.lg}`};
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
  font-size: 3.25rem;
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.625rem;
  }
`;

// 固定肩書き。5秒で読める1つだけ。名前より小さいが、濃さ（太字＋グラデーション）で視覚の起点にする
const Title = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Tagline = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  max-width: 640px;
`;

// モバイルでは句読点の位置で改行する（途中の単語で折り返させない）
const TaglinePart = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

// 実績チップ3つ。数字を主役にし、指標名と条件は小さく添える
const ProofRow = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
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

// カード全体を該当の経歴ページへのリンクにする（数字の出どころへ1タップで行ける）
const ProofLink = styled(Link)`
  display: block;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => `${theme.colors.surface}80`};
  transition: border-color ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
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
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

// 測定条件（対象・件数・評価データ）。数字だけが独り歩きしないよう必ず添える
const ProofCondition = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// 44px のアイコンボタンはやめ、CTA の下に小さな文字リンクで置く
const SocialWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
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

const githubUrl = profile.social.find((s) => s.platform === 'github')?.url;

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
            <li key={p.axis}>
              <ProofLink
                to={`/experience/${p.experienceId}`}
                aria-label={`${p.axis}: ${p.value} ${p.metric}（${p.condition}）`}
              >
                <ProofAxis>{p.axis}</ProofAxis>
                <ProofValue>{p.value}</ProofValue>
                <ProofMetric>{p.metric}</ProofMetric>
                <ProofCondition>{p.condition}</ProofCondition>
              </ProofLink>
            </li>
          ))}
        </ProofRow>
        <ButtonGroup variants={itemVariants}>
          <Button onClick={() => scrollToSection('experience')} href="#experience">
            実務経験を見る
          </Button>
          <Button variant="outline" href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHubを見る
          </Button>
        </ButtonGroup>
        <SocialWrapper variants={itemVariants}>
          <SocialIcons links={heroLinks} />
        </SocialWrapper>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
