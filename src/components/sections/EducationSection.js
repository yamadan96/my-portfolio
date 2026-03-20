import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import education from '../../data/education';

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['2xl']};

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing['2xl']};
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.background};
    z-index: 1;
    margin-left: 0px;
  }
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const School = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const Faculty = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Degree = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const EducationSection = () => (
  <Section id="education">
    <SectionTitle title="Education" subtitle="学歴" />
    <TimelineWrapper>
      {education.map((item, index) => (
        <TimelineItem
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Period>{item.period}</Period>
          <School>{item.school}</School>
          <Faculty>{item.faculty}</Faculty>
          {item.degree && <Degree>{item.degree}</Degree>}
          {item.description && <Description>{item.description}</Description>}
        </TimelineItem>
      ))}
    </TimelineWrapper>
  </Section>
);

export default EducationSection;
