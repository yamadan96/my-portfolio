import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import profile from '../../data/profile';

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const AchievementTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

// 1行だけ。長い説明は書かない（詳細は Research / 外部記事へ）
const AchievementLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const AchievementLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const AchievementLink = styled.a`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

// Accept either `links: [{ label, url }]` or a single legacy `link` string
const toLinkList = (item) => {
  if (item.links && item.links.length > 0) return item.links;
  if (item.link) return [{ label: '詳細を見る', url: item.link }];
  return [];
};

const AchievementsSection = () => (
  <Section id="achievements">
    <SectionTitle title="Awards & Recognition" subtitle="受賞・採択・掲載" />
    <AchievementsGrid>
      {profile.achievements.map((item, index) => (
        <AchievementCard
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <AchievementTitle>{item.title}</AchievementTitle>
          <AchievementLine>{item.line}</AchievementLine>
          {toLinkList(item).length > 0 && (
            <AchievementLinks>
              {toLinkList(item).map((l) => (
                <AchievementLink key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                  {l.label} →
                </AchievementLink>
              ))}
            </AchievementLinks>
          )}
        </AchievementCard>
      ))}
    </AchievementsGrid>
  </Section>
);

export default AchievementsSection;
