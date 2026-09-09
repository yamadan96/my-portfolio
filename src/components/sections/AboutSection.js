import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const CareerBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const AboutSection = () => (
  <Section id="about">
    <SectionTitle title="About" subtitle="私について" />
    <AboutGrid>
      <AboutText>
        {profile.career && (
          <CareerBadge
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {profile.career}
          </CareerBadge>
        )}
        {/* 本文は profile.bio の2段落（研究・実務）のみ。文言はデータ側で管理する */}
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </AboutText>
    </AboutGrid>
  </Section>
);

export default AboutSection;
