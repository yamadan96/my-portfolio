import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import certifications from '../../data/certifications';

const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CertCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: border-color ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CertBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => `${theme.colors.primary}15`};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const CertInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CertName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  margin-bottom: 2px;
`;

const CertDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CertCategory = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `2px ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;
`;

const CertLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionTitle title="Certifications" subtitle="資格・認定" />
    <CertList>
      {certifications.map((cert, index) => (
        <CertCard
          key={cert.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <CertBadge>📜</CertBadge>
          <CertInfo>
            <CertName>{cert.name}</CertName>
            {cert.year && (
              <CertDescription>{cert.year} 取得</CertDescription>
            )}
            {cert.link && (
              <CertLink
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                証明を見る →
              </CertLink>
            )}
          </CertInfo>
          <CertCategory>{cert.category}</CertCategory>
        </CertCard>
      ))}
    </CertList>
  </Section>
);

export default CertificationsSection;
