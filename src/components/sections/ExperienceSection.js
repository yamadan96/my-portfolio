import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ExperienceRow from '../ui/ExperienceRow';
import ExpandInPlace from '../ui/ExpandInPlace';
import { mobileTapArea } from '../../styles/tapArea';
import experiences from '../../data/experiences';

// トップページのタイムラインに開いた状態で出す件数（experiences.js の先頭から）
export const TOP_PAGE_COUNT = 7;

const RowList = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

  &:first-child {
    margin-top: 0;
  }
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
  color: ${({ theme }) => theme.colors.accentText};
  font-weight: 600;
`;

// 1〜2行に収める（description が長い場合は末尾を省略、全文は詳細ページへ）
const CompactDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const CompactDetailLink = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentText};
  margin-top: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${mobileTapArea}
`;

const ExperienceSection = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/experience/${id}`);
  };

  // 先頭5件だけをタイムラインに出し、残り（6件目以降・インターン・短期プログラム）は折りたたむ
  const major = experiences.slice(0, TOP_PAGE_COUNT);
  const rest = experiences.slice(TOP_PAGE_COUNT);
  const others = rest.filter((e) => !e.short);
  const short = rest.filter((e) => e.short);

  const renderCompactGrid = (items) => (
    <CompactGrid>
      {items.map((item, index) => (
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
  );

  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="主要な経験" />
      <RowList>
        {major.map((item) => (
          <ExperienceRow key={item.id} item={item} onDetailClick={handleDetailClick} />
        ))}
      </RowList>
      {rest.length > 0 && (
        <ExpandInPlace
          label={`その他${rest.length}件の経験を見る →`}
          closeLabel="その他の経験を閉じる ↑"
        >
          {others.length > 0 && (
            <>
              <SubHeading>その他の実務経験</SubHeading>
              {renderCompactGrid(others)}
            </>
          )}
          {short.length > 0 && (
            <>
              <SubHeading>短期インターン・ワークショップ</SubHeading>
              {renderCompactGrid(short)}
            </>
          )}
        </ExpandInPlace>
      )}
    </Section>
  );
};

export default ExperienceSection;
