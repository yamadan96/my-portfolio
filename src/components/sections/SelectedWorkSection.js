import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import selectedWork from '../../data/selectedWork';
import projects from '../../data/projects';

// 1枚のカードで読ませる順番は Problem → What I built → Impact。
// 詳細（アーキテクチャ・実験・データセット）は詳細ページへ逃がす。
// 1カラム固定。2カラムにすると Problem / Built の行が折り返して
// ラベルと本文の対応が崩れ、「見せる」構造が読めなくなる。
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CardShell = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Context = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const RowLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: 2px;
`;

const RowBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Metrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.md}`};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Metric = styled.div`
  flex: 1 1 40%;
  min-width: 0;
`;

const MetricValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
`;

const MetricLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 2px;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const Stack = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const DetailLink = styled.button`
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

const SelectedWorkSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="work">
      <SectionTitle title="Selected Work" subtitle="代表的な成果 4件" />
      <Grid>
        {selectedWork.map((item) => (
          <CardShell key={item.id}>
            <Context>{item.context}</Context>
            <Title>{item.title}</Title>
            <Row>
              <RowLabel>Problem</RowLabel>
              <RowBody>{item.problem}</RowBody>
            </Row>
            <Row>
              <RowLabel>Built</RowLabel>
              <RowBody>{item.built}</RowBody>
            </Row>
            <Metrics>
              {item.metrics.map((m) => (
                <Metric key={m.label}>
                  <MetricValue>{m.value}</MetricValue>
                  <MetricLabel>{m.label}</MetricLabel>
                </Metric>
              ))}
            </Metrics>
            <Footer>
              <Stack>{item.stack.join(' · ')}</Stack>
              <DetailLink onClick={() => navigate(item.detailPath)}>詳細を見る →</DetailLink>
            </Footer>
          </CardShell>
        ))}
      </Grid>
      <MoreRow>
        <MoreLink onClick={() => navigate('/work')}>個人開発・研究実装をすべて見る（{projects.length}件）→</MoreLink>
      </MoreRow>
    </Section>
  );
};

export default SelectedWorkSection;
