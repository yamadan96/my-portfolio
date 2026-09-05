import React from 'react';
import styled from 'styled-components';
import profile from '../../data/profile';

// 最初の画面で伝えるのは 名前 / 肩書き / 見出し1行 / 紹介文 / 導線2つ だけ。
// 数字の羅列・SNS アイコン・モデル名は置かない（それぞれ 詳細ページ / Contact / Skills が担当）。
const Wrapper = styled.header`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `9rem ${theme.spacing.xl} ${theme.spacing['3xl']}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `7rem ${theme.spacing.md} ${theme.spacing['2xl']}`};
  }
`;

const Eyebrow = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Name = styled.h1`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const NameEn = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.textMuted};
  vertical-align: 0.35em;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    margin: ${({ theme }) => `${theme.spacing.xs} 0 0`};
  }
`;

const Headline = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.measure};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Intro = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.measure};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const buttonBase = `
  padding: 0.625rem 1.25rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

const Primary = styled.button`
  ${buttonBase}
  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    opacity: 0.85;
  }
`;

const Secondary = styled.button`
  ${buttonBase}
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

const HeroSection = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Wrapper id="hero">
      <Eyebrow>{profile.roleLabel}</Eyebrow>
      <Name>
        {profile.name}
        <NameEn>{profile.nameEn}</NameEn>
      </Name>
      <Headline>{profile.headline}</Headline>
      <Intro>{profile.intro}</Intro>
      <Actions>
        <Primary onClick={() => scrollTo('experience')}>職務経歴を見る</Primary>
        <Secondary onClick={() => scrollTo('about')}>プロフィールを見る</Secondary>
      </Actions>
    </Wrapper>
  );
};

export default HeroSection;
