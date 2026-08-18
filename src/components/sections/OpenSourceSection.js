import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import openSource from '../../data/opensource';

const Intro = styled.p`
  max-width: 720px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const RepoCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const RepoName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  word-break: break-all;
`;

const RepoDesc = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Meta = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Lang = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const ExtraLink = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.success};
  border: 1px solid ${({ theme }) => `${theme.colors.success}50`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 1px 6px;
`;

const ProfileCta = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
`;

const ProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const OpenSourceSection = () => (
  <Section id="opensource">
    <SectionTitle title="Open Source" subtitle="公開リポジトリ" />
    <Intro>{openSource.summary}</Intro>
    <Grid>
      {openSource.repositories.map((repo) => (
        <RepoCard key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer">
          <RepoName>
            {repo.name}
            {repo.extraUrl && <ExtraLink>{repo.extraUrl.label}</ExtraLink>}
          </RepoName>
          <RepoDesc>{repo.description}</RepoDesc>
          <Meta>
            <Lang>{repo.language}</Lang>
            {repo.topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Meta>
        </RepoCard>
      ))}
    </Grid>
    <ProfileCta>
      <ProfileLink href={openSource.githubUrl} target="_blank" rel="noopener noreferrer">
        GitHub のリポジトリ一覧を見る →
      </ProfileLink>
    </ProfileCta>
  </Section>
);

export default OpenSourceSection;
