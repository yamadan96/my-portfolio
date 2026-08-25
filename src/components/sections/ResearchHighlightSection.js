import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import publications from '../../data/publications';

// このセクションの1メッセージ:
//   「査読を通った研究で、公開ベンチマークのSoTAを更新している」
//
// 代表1件だけを大きく見せ、残りは1行の年表に落とす。
// 手法・データセット・実験条件は Research ページ／原稿PDF へ。
const Featured = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Venue = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  line-height: 1.45;
`;

const Lead = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: 52rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Metrics = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const MetricValue = styled.dt`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const MetricLabel = styled.dd`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const LinkChip = styled.a`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const OtherList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const OtherItem = styled.li`
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr) minmax(0, 20rem);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: baseline;
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const OtherYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const OtherTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  line-height: 1.6;
`;

const OtherMetric = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
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

const ResearchHighlightSection = () => {
  const navigate = useNavigate();
  const [featured, ...others] = publications;

  return (
    <Section id="research">
      <SectionTitle title="Research" subtitle="査読付き学会発表 4件 — 代表1件" />
      <Featured>
        <Venue>{featured.venue}</Venue>
        <Title>{featured.title}</Title>
        <Lead>
          DINOv2 / DINOv3 を凍結して LoRA だけを学習する構成で、規模の異なる4つの災害画像データセットを
          同一プロトコルで比較。より新しい基盤モデルが常に強いわけではないこと、そして更新パラメータ 0.26% の
          LoRA が Full Fine-Tuning を上回ることを示した。
        </Lead>
        <Metrics>
          {featured.metrics.map((m) => (
            <div key={m.label}>
              <MetricValue>{m.value}</MetricValue>
              <MetricLabel>{m.label}</MetricLabel>
            </div>
          ))}
        </Metrics>
        <Links>
          {featured.materials.map((mat) => (
            <LinkChip key={mat.url} href={mat.url} target="_blank" rel="noopener noreferrer">
              {mat.label}
            </LinkChip>
          ))}
        </Links>
      </Featured>
      <OtherList>
        {others.map((pub) => (
          <OtherItem key={pub.id}>
            <OtherYear>{pub.year}</OtherYear>
            <OtherTitle>{pub.title}</OtherTitle>
            <OtherMetric>{pub.highlight}</OtherMetric>
          </OtherItem>
        ))}
      </OtherList>
      <MoreRow>
        <MoreLink onClick={() => navigate('/research')}>
          発表内容・原稿・スライドを見る →
        </MoreLink>
      </MoreRow>
    </Section>
  );
};

export default ResearchHighlightSection;
