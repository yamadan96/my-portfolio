import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import skills from '../../data/skills';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: border-color ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
`;

const CategoryName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted || theme.colors.textSecondary};
  opacity: 0.7;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const SkillsSection = () => (
  <Section id="skills">
    <SectionTitle title="Skills" subtitle="技術スタック" />
    <SkillsGrid>
      {skills.map((category, catIndex) => (
        <CategoryCard
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: catIndex * 0.1 }}
        >
          <CategoryHeader>
            <CategoryIcon>{category.icon}</CategoryIcon>
            <CategoryName>{category.category}</CategoryName>
          </CategoryHeader>
          <SkillList>
            {category.items.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
              >
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillInfo>
                <BarBackground>
                  <BarFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: catIndex * 0.1 + index * 0.05, ease: 'easeOut' }}
                  />
                </BarBackground>
              </SkillItem>
            ))}
          </SkillList>
        </CategoryCard>
      ))}
    </SkillsGrid>
  </Section>
);

export default SkillsSection;
