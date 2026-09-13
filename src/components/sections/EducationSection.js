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

  @media (max-width: 768px) {
    padding-left: 1.5rem;
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

    @media (max-width: 768px) {
      left: -1.5rem;
      width: 12px;
      height: 12px;
    }
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
  line-height: 1.7;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

// topPage: 'compact' の項目（高校）は「期間 · 学校 学科」の1行だけにする
const CompactLine = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CompactSchool = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

// トップページには topPage: false 以外を出す（中学校は出さない）
const visibleEducation = education.filter((item) => item.topPage !== false);

const EducationSection = () => (
  <Section id="education">
    <SectionTitle title="Education" subtitle="学歴" />
    <TimelineWrapper>
      {visibleEducation.map((item, index) => (
        <TimelineItem
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {item.topPage === 'compact' ? (
            <CompactLine>
              <Period>{item.period}</Period>
              <CompactSchool>{item.school}</CompactSchool>
              {item.faculty && <span>{item.faculty}</span>}
            </CompactLine>
          ) : (
            <>
              <Period>{item.period}</Period>
              <School>{item.school}</School>
              <Faculty>{item.faculty}</Faculty>
              {item.degree && <Degree>{item.degree}</Degree>}
              {item.description && <Description>{item.description}</Description>}
            </>
          )}
        </TimelineItem>
      ))}
    </TimelineWrapper>
  </Section>
);

export default EducationSection;
