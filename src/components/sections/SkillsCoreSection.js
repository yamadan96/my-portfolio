import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { MoreRow, TextLink } from '../ui/Editorial';
import skillsCore from '../../data/skillsCore';

// 領域名 → 技術名 だけ。説明文・アイコン・習熟度バーは置かない。全一覧（約70項目）は CV ページ。
const List = styled.dl`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Category = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
`;

const Items = styled.dd`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  align-content: flex-start;
`;

const Item = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsCoreSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="skills">
      <SectionTitle index="04" eyebrow="Skills" title="スキル" />
      <List>
        {skillsCore.map((group) => (
          <Row key={group.category}>
            <Category>{group.category}</Category>
            <Items>
              {group.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </Items>
          </Row>
        ))}
      </List>
      <MoreRow>
        <TextLink onClick={() => navigate('/more')}>使用技術の全一覧を見る →</TextLink>
      </MoreRow>
    </Section>
  );
};

export default SkillsCoreSection;
