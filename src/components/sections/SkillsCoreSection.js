import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import skillsCore from '../../data/skillsCore';

// このセクションの1メッセージ:
//   「基盤モデル / LLMエージェント / 本番化 / 評価 の4つを自分で回せる」
// アイコンの羅列はしない。カテゴリ名（Level 2）と技術名（Level 3）で強度を分ける。
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Category = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Item = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MoreRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const MoreLink = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillsCoreSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="skills">
      <SectionTitle title="Skills" subtitle="主戦場は4領域" />
      <Grid>
        {skillsCore.map((group) => (
          <Group key={group.category}>
            <Category>{group.category}</Category>
            <Lead>{group.lead}</Lead>
            <Items>
              {group.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </Items>
          </Group>
        ))}
      </Grid>
      <MoreRow>
        <MoreLink onClick={() => navigate('/more')}>使用技術の全一覧を見る →</MoreLink>
      </MoreRow>
    </Section>
  );
};

export default SkillsCoreSection;
