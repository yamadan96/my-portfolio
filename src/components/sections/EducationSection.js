import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import education from '../../data/education';

// 縦線とドットのタイムラインはやめ、Experience と同じ「期間 | 本文」の2カラムの行に揃える
const List = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 4px;
`;

const School = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
`;

const Faculty = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

// トップページには topPage: false 以外を出す（高校・中学校は出さない）
const visibleEducation = education.filter((item) => item.topPage !== false);

const EducationSection = () => (
  <Section id="education">
    <SectionTitle title="Education" subtitle="学歴" />
    <List>
      {visibleEducation.map((item, index) => (
        <Row
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.08 }}
        >
          <Period>{item.period}</Period>
          <div>
            <School>{item.school}</School>
            <Faculty>
              {item.faculty}
              {item.degree && ` · ${item.degree}`}
            </Faculty>
            {item.description && <Description>{item.description}</Description>}
          </div>
        </Row>
      ))}
    </List>
  </Section>
);

export default EducationSection;
