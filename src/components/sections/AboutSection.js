import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import profile from '../../data/profile';

// 数字欄は置かない（数字は Hero と Experience が持つ）。本文だけを読みやすい幅で中央に
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 40rem);
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// 1行1文。段落間は詰めて4行のかたまりとして読ませる
const AboutText = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.75;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

// 末尾の補助情報（所属・修了予定）。本文より小さく、目立たせない
const StatusLine = styled.p`
  && {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 0;
  }
`;

const AboutSection = () => (
  <Section id="about">
    <SectionTitle title="About" subtitle="Research × Engineering" />
    <AboutGrid>
      <AboutText>
        {/* 本文は profile.aboutLines（1行1文）。bio は履歴書生成などの一次情報源として残す */}
        {profile.aboutLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        {profile.status && <StatusLine>{profile.status}</StatusLine>}
      </AboutText>
    </AboutGrid>
  </Section>
);

export default AboutSection;
