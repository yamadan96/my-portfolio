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
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
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

const AchievementIcon = styled.span`
  font-size: 2rem;
  flex-shrink: 0;
`;

const AchievementContent = styled.div``;

const AchievementTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const AchievementDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
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
    <SectionTitle title="Achievements" subtitle="実績" />
    <AchievementsGrid>
      {profile.achievements.map((item, index) => (
        <AchievementCard
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <AchievementIcon>{item.icon}</AchievementIcon>
          <AchievementContent>
            <AchievementTitle>{item.title}</AchievementTitle>
            <AchievementDescription>{item.description}</AchievementDescription>
            {toLinkList(item).length > 0 && (
              <AchievementLinks>
                {toLinkList(item).map((l) => (
                  <AchievementLink
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label} →
                  </AchievementLink>
                ))}
              </AchievementLinks>
            )}
          </AchievementContent>
        </AchievementCard>
      ))}
    </AchievementsGrid>
  </Section>
);

export default AchievementsSection;
