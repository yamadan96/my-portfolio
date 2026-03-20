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

const TypeBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme, $type }) =>
    $type === '学会発表' ? `${theme.colors.success}20` : `${theme.colors.primary}20`};
  color: ${({ theme, $type }) =>
    $type === '学会発表' ? theme.colors.success : theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ResearchTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Venue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ResearchSection = () => (
  <Section id="research">
    <SectionTitle title="Research" subtitle="研究実績" />
    <ResearchGrid>
      {research.map((item, index) => (
        <Card key={item.id}>
          <TypeBadge $type={item.type}>{item.type}</TypeBadge>
          <ResearchTitle>{item.title}</ResearchTitle>
          <Venue>{item.venue} ({item.year})</Venue>
          <Description>{item.description}</Description>
          <Tags>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Card>
      ))}
    </ResearchGrid>
  </Section>
);

export default ResearchSection;
