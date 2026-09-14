import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ExpandInPlace from '../ui/ExpandInPlace';
import skills from '../../data/skills';

// 開いた状態で出すのは core: true の4グループ（Core / LLM / Vision / Production）。
// 残りのカテゴリは「Other Technologies」として1つに折りたたむ
const coreGroups = skills.filter((group) => group.core);
const otherGroups = skills.filter((group) => !group.core);

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: border-color ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryIcon = styled.span`
  font-size: 1.25rem;
`;

const CategoryName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled(motion.span)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// 折りたたみの中は「旧カテゴリ名 → タグ列」の行を縦に並べる（カードにはしない）
const OtherPanel = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const OtherRow = styled.div`
  display: grid;
  grid-template-columns: 11rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const OtherLabel = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-top: 6px;
`;

const SkillsSection = () => (
  <Section id="skills">
    <SectionTitle title="Skills" subtitle="Core Skills" />
    <SkillsGrid>
      {coreGroups.map((category, catIndex) => (
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
          <TagList>
            {category.items.map((skill, index) => (
              <Tag
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
              >
                {skill}
              </Tag>
            ))}
          </TagList>
        </CategoryCard>
      ))}
    </SkillsGrid>
    {otherGroups.length > 0 && (
      <ExpandInPlace
        label="Other Technologies →"
        closeLabel="Other Technologies を閉じる ↑"
      >
        <OtherPanel>
          {otherGroups.map((group) => (
            <OtherRow key={group.category}>
              <OtherLabel>
                {group.icon} {group.category}
              </OtherLabel>
              <TagList>
                {group.items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </TagList>
            </OtherRow>
          ))}
        </OtherPanel>
      </ExpandInPlace>
    )}
  </Section>
);

export default SkillsSection;
