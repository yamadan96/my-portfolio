import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import writing from '../../data/writing';

const ProfileRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ProfileChip = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Count = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ArticleCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid
    ${({ theme, $featured }) => ($featured ? `${theme.colors.primary}40` : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const MetaRow = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ArticleTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Summary = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const WritingSection = () => (
  <Section id="writing">
    <SectionTitle title="Writing" subtitle="技術記事（抜粋）" />
    <ProfileRow>
      {writing.profiles.map((p) => (
        <ProfileChip key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer">
          {p.platform}
          <Count>{p.count}</Count>
        </ProfileChip>
      ))}
    </ProfileRow>
    <Grid>
      {writing.articles.map((a) => (
        <ArticleCard
          key={a.id}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          $featured={a.featured}
        >
          <MetaRow>
            <span>{a.date}</span>
            <span>·</span>
            <span>{a.platform}</span>
          </MetaRow>
          <ArticleTitle>{a.title}</ArticleTitle>
          <Summary>{a.summary}</Summary>
          <Tags>
            {a.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        </ArticleCard>
      ))}
    </Grid>
  </Section>
);

export default WritingSection;
