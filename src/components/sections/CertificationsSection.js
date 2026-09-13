import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { mobileTapArea } from '../../styles/tapArea';
import certifications from '../../data/certifications';

// 768px 以上は2列グリッド（並びは左→右・上→下で新しい順を保つ）、それ未満は1列
const CertList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

const CertLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CertLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentText};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${mobileTapArea}
`;

// 取得年月の新しい順に並べる（year は「2026年9月」形式）。同じ月なら記載順を保つ
const yearMonth = (year) => {
  const m = /(\d{4})年(?:(\d{1,2})月)?/.exec(year || '');
  return m ? Number(m[1]) * 100 + Number(m[2] || 0) : 0;
};
const sortedCertifications = certifications
  .map((cert, index) => ({ cert, index }))
  .sort((a, b) => yearMonth(b.cert.year) - yearMonth(a.cert.year) || a.index - b.index)
  .map(({ cert }) => cert);

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionTitle title="Certifications" subtitle="資格・認定" />
    <CertList>
      {sortedCertifications.map((cert, index) => (
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
            {(cert.link || cert.pdfLink) && (
              <CertLinks>
                {cert.link && (
                  <CertLink
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    証明を見る →
                  </CertLink>
                )}
                {cert.pdfLink && (
                  <CertLink
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    認定証PDF →
                  </CertLink>
                )}
              </CertLinks>
            )}
          </CertInfo>
          <CertCategory>{cert.category}</CertCategory>
        </CertCard>
      ))}
    </CertList>
  </Section>
);

export default CertificationsSection;
