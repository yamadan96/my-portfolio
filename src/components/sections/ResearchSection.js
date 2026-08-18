import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import research from '../../data/research';

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.success}18`};
  color: ${({ theme }) => theme.colors.success};
  border: 1px solid ${({ theme }) => `${theme.colors.success}40`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
`;

const ResearchTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.45;
`;

const Venue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Block = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BlockLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 4px;
`;

const BlockBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResultItem = styled.li`
  position: relative;
  padding-left: 1.1em;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin-bottom: 6px;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ResearchLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ResearchSection = () => (
  <Section id="research">
    <SectionTitle
      title="Research"
      subtitle="進行中の研究 — 課題 / 貢献 / 結果"
    />
    <ResearchGrid>
      {research.map((item) => (
        <Card key={item.id}>
          <BadgeRow>
            <TypeBadge>{item.type}</TypeBadge>
            {item.status === 'submitting' && <StatusBadge>実験完了・投稿準備中</StatusBadge>}
          </BadgeRow>
          <ResearchTitle>{item.title}</ResearchTitle>
          <Venue>{item.venue}</Venue>

          {item.problem && (
            <Block>
              <BlockLabel>Problem</BlockLabel>
              <BlockBody>{item.problem}</BlockBody>
            </Block>
          )}
          {item.contribution && (
            <Block>
              <BlockLabel>My Contribution</BlockLabel>
              <BlockBody>{item.contribution}</BlockBody>
            </Block>
          )}
          {item.results && item.results.length > 0 && (
            <Block>
              <BlockLabel>Results</BlockLabel>
              <ResultList>
                {item.results.map((r) => (
                  <ResultItem key={r}>{r}</ResultItem>
                ))}
              </ResultList>
            </Block>
          )}
          {item.lessons && (
            <Block>
              <BlockLabel>Lessons Learned</BlockLabel>
              <BlockBody>{item.lessons}</BlockBody>
            </Block>
          )}
          {!item.problem && item.description && <BlockBody>{item.description}</BlockBody>}

          <Tags>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          {item.link && (
            <ResearchLink href={item.link} target="_blank" rel="noopener noreferrer">
              詳細 →
            </ResearchLink>
          )}
        </Card>
      ))}
    </ResearchGrid>
  </Section>
);

export default ResearchSection;
