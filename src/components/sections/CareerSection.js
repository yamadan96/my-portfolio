import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import experiences from '../../data/experiences';

// このセクションの1メッセージ:
//   「研究所・スタートアップ・上場企業のいずれでも、AI を本番まで持っていっている」
//
// 出すのは長期・実務の6社だけ。1社あたり 作ったもの / 結果 の2行に固定し、
// 粒度を揃える。担当業務の説明・技術スタックの列挙は詳細ページへ。
const TOP_IDS = [
  'matsuo-institute-gui-rag',
  'airion',
  'legalon',
  'mixi',
  'legaltech-freelance',
  'solty',
];

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Item = styled.article`
  display: grid;
  grid-template-columns: 13rem 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Period = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 4px;
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.4;
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Bullets = styled.dl`
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: ${({ theme }) => `4px ${theme.spacing.sm}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BulletLabel = styled.dt`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 2px;
`;

const BulletBody = styled.dd`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DetailLink = styled.button`
  margin-top: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

const CareerSection = () => {
  const navigate = useNavigate();
  const items = TOP_IDS.map((id) => experiences.find((e) => e.id === id)).filter(Boolean);
  // 件数ではなく社数で数える（松尾研究所のように1社で複数エントリがあるため）
  const allCompanies = new Set(experiences.map((e) => e.company));
  const shownCompanies = new Set(items.map((e) => e.company));
  const restCount = allCompanies.size - shownCompanies.size;

  return (
    <Section id="experience">
      <SectionTitle
        title="Experience"
        subtitle={`長期の実務経験 ${items.length}社（他${restCount}社は経歴ページ）`}
      />
      <List>
        {items.map((item) => (
          <Item key={item.id}>
            <Period>{item.period}</Period>
            <div>
              <Company>{item.company}</Company>
              <Role>{item.role}</Role>
              <Bullets>
                <BulletLabel>作ったもの</BulletLabel>
                <BulletBody>{item.summary.built}</BulletBody>
                <BulletLabel>結果</BulletLabel>
                <BulletBody>{item.summary.result}</BulletBody>
              </Bullets>
              {item.hasDetail && (
                <DetailLink onClick={() => navigate(`/experience/${item.id}`)}>
                  詳細を見る →
                </DetailLink>
              )}
            </div>
          </Item>
        ))}
      </List>
      <MoreRow>
        <MoreLink onClick={() => navigate('/more')}>
          短期インターン・ワークショップを含む全{allCompanies.size}社を見る →
        </MoreLink>
      </MoreRow>
    </Section>
  );
};

export default CareerSection;
