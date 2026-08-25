import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import profile from '../../data/profile';
import SocialIcons from '../ui/SocialIcons';

// このセクションの1メッセージ:
//   「研究水準の検証と本番実装の両方をやる AI エンジニア」
// これを 5 秒で伝えるために、置くのは 役割 / 一行の立ち位置 / 数字3つ / CTA だけ。
const Wrapper = styled.header`
  min-height: 88vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.xl}`};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.md}`};
    padding-top: 7rem;
  }
`;

const Inner = styled.div`
  width: 100%;
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Headline = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: 46rem;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Sub = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: 46rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Proof = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 52rem;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ProofValue = styled.dt`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const ProofLabel = styled.dd`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const Primary = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Secondary = styled.a`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background: transparent;
  font-family: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Socials = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const github = profile.social.find((s) => s.platform === 'github')?.url;

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Wrapper id="hero">
      <Inner>
        <Eyebrow>AI Engineer — Vision Foundation Models &amp; LLM Agents</Eyebrow>
        <Name>{profile.name}</Name>
        <Headline>{profile.headline}</Headline>
        <Sub>{profile.positioning}</Sub>
        <Proof>
          {profile.proof.map((p) => (
            <div key={p.label}>
              <ProofValue>{p.value}</ProofValue>
              <ProofLabel>{p.label}</ProofLabel>
            </div>
          ))}
        </Proof>
        <Actions>
          <Primary onClick={() => scrollTo('work')}>Selected Work</Primary>
          <Secondary href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Secondary>
          <Secondary as="button" onClick={() => navigate('/more')}>
            経歴・受賞・学位
          </Secondary>
          <Secondary as="button" onClick={() => scrollTo('contact')}>
            Contact
          </Secondary>
        </Actions>
        <Socials>
          <SocialIcons links={profile.social} />
        </Socials>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
