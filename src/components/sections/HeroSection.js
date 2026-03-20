import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../data/profile';
import SocialIcons from '../ui/SocialIcons';
import Button from '../ui/Button';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
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

const Greeting = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const RoleText = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  min-height: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.8;
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

const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

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
  const typedText = useTypingEffect(profile.roles);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper id="hero">
      <HeroBg />
      <HeroContent variants={containerVariants} initial="hidden" animate="visible">
        <Greeting variants={itemVariants}>こんにちは、私は</Greeting>
        <Name variants={itemVariants}>{profile.name}</Name>
        <RoleText variants={itemVariants}>
          {typedText}
          <Cursor />
        </RoleText>
        <Description variants={itemVariants}>{profile.bio}</Description>
        <SocialWrapper variants={itemVariants}>
          <SocialIcons links={profile.social} />
        </SocialWrapper>
        <ButtonGroup variants={itemVariants}>
          <Button onClick={() => scrollToSection('projects')} href="#projects">
            プロジェクトを見る
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
