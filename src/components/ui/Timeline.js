import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tag from './Tag';

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['2xl']};

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing['2xl']};
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.background};
    z-index: 1;
    margin-left: 0px;
  }
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const DetailLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Timeline = ({ items, onDetailClick }) => (
  <TimelineWrapper>
    {items.map((item, index) => (
      <TimelineItem
        key={item.id || index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Period>{item.period}</Period>
        <Company>{item.company}</Company>
        <Role>{item.role}</Role>
        {item.description && <Description>{item.description}</Description>}
        {item.tags && (
          <Tags>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
        {item.hasDetail && onDetailClick && (
          <DetailLink
            onClick={() => onDetailClick(item.id)}
            whileHover={{ x: 4 }}
          >
            詳細を見る →
          </DetailLink>
        )}
      </TimelineItem>
    ))}
  </TimelineWrapper>
);

export default Timeline;
