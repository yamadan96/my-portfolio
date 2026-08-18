import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import profile from '../../data/profile';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: start;

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

const BioEn = styled.p`
  && {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    font-style: italic;
    line-height: 1.7;
    border-left: 2px solid ${({ theme }) => theme.colors.border};
    padding-left: ${({ theme }) => theme.spacing.md};
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatCard = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(92px, auto) 1fr;
  align-items: baseline;
  column-gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const HighlightText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const HighlightNote = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  line-height: 1.5;
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

const FocusBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FocusLabel = styled.p`
  && {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const FocusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FocusChip = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `4px ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => `${theme.colors.primary}12`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 800;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
        {profile.bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {profile.focusAreas && profile.focusAreas.length > 0 && (
          <FocusBlock>
            <FocusLabel>Focus Areas</FocusLabel>
            <FocusList>
              {profile.focusAreas.map((area) => (
                <FocusChip key={area}>{area}</FocusChip>
              ))}
            </FocusList>
          </FocusBlock>
        )}
        {profile.bioEn && <BioEn>{profile.bioEn}</BioEn>}
      </AboutText>
      <StatsGrid>
        {profile.highlights.map((item, index) => (
          <StatCard
            key={item.label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <StatValue>{item.value}</StatValue>
            <HighlightText>
              <StatLabel>{item.label}</StatLabel>
              {item.note && <HighlightNote>{item.note}</HighlightNote>}
            </HighlightText>
          </StatCard>
        ))}
      </StatsGrid>
    </AboutGrid>
  </Section>
);

export default AboutSection;
