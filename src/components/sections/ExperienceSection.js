import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';
import experiences from '../../data/experiences';

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const SubNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: -${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.lg};
`;

const CompactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const CompactCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface || 'transparent'};
`;

const CompactCompany = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: 2px;
`;

const CompactPeriod = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const CompactDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const CompactDetailLink = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ExperienceSection = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/experience/${id}`);
  };

  const major = experiences.filter((e) => !e.short);
  const short = experiences.filter((e) => e.short);

  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="インターン・実務経験（16社）" />
      <Timeline items={major} onDetailClick={handleDetailClick} />
      {short.length > 0 && (
        <>
          <SubHeading>短期インターン・ワークショップ</SubHeading>
          <SubNote>1日〜1週間の選抜型プログラム（{short.length}社）</SubNote>
          <CompactGrid>
            {short.map((item, index) => (
              <CompactCard
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CompactCompany>{item.company}</CompactCompany>
                <CompactPeriod>{item.period}</CompactPeriod>
                <CompactDescription>{item.description}</CompactDescription>
                {item.hasDetail && (
                  <CompactDetailLink onClick={() => handleDetailClick(item.id)}>
                    詳細を見る →
                  </CompactDetailLink>
                )}
              </CompactCard>
            ))}
          </CompactGrid>
        </>
      )}
    </Section>
  );
};

export default ExperienceSection;
