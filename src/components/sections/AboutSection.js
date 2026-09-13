import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import profile from '../../data/profile';

// 数字欄は置かない（件数は本文に書いてある）。本文だけを読みやすい幅で中央に
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 46rem);
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

// 末尾の補助情報（所属・修了予定・入社予定）。本文より小さく、目立たせない
const StatusLine = styled.p`
  && {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 0;
  }
`;

const AboutSection = () => (
  <Section id="about">
    <SectionTitle title="About" subtitle="私について" />
    <AboutGrid>
      <AboutText>
        {/* 本文は profile.bio の2段落（実務・研究）。文言はデータ側で管理する */}
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {profile.status && <StatusLine>{profile.status}</StatusLine>}
      </AboutText>
    </AboutGrid>
  </Section>
);

export default AboutSection;
