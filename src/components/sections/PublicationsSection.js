import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import publications from '../../data/publications';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.45;
  flex: 1 1 auto;
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Venue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.success}20`};
  color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Highlight = styled.p`
  display: inline-block;
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => `${theme.colors.primary}12`};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Abstract = styled.blockquote`
  margin: ${({ theme }) => `0 0 ${theme.spacing.md}`};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-left: 3px solid ${({ theme }) => `${theme.colors.primary}55`};
  background: ${({ theme }) => `${theme.colors.primary}08`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

const AbstractLabel = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Citation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-style: italic;
`;

const MaterialsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const MaterialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}20`};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PublicationsSection = () => (
  <Section id="publications">
    <SectionTitle title="Publications" subtitle="学会発表・論文" />
    <List>
      {publications.map((item) => (
        <Card key={item.id}>
          <TypeBadge>{item.type}</TypeBadge>
          <Head>
            <Title>{item.title}</Title>
            <Year>{item.year}</Year>
          </Head>
          <Venue>{item.venue}</Venue>
          {item.highlight && <Highlight>{item.highlight}</Highlight>}
          {item.abstract && (
            <Abstract>
              <AbstractLabel>Abstract（原稿より）</AbstractLabel>
              {item.abstract}
            </Abstract>
          )}
          <Description>{item.description}</Description>
          <Tags>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          {item.citation && <Citation>{item.citation}</Citation>}
          {((item.materials && item.materials.length > 0) || item.link) && (
            <MaterialsRow>
              {item.link && (
                <MaterialLink href={item.link} target="_blank" rel="noopener noreferrer">
                  🔗 会議ページ
                </MaterialLink>
              )}
              {(item.materials || []).map((mat) => (
                <MaterialLink key={mat.url} href={mat.url} target="_blank" rel="noopener noreferrer">
                  📄 {mat.label}
                </MaterialLink>
              ))}
            </MaterialsRow>
          )}
        </Card>
      ))}
    </List>
  </Section>
);

export default PublicationsSection;
