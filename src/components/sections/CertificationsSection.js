import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ExpandInPlace from '../ui/ExpandInPlace';
import { mobileTapArea } from '../../styles/tapArea';
import certifications from '../../data/certifications';

// カードはやめ、1資格1行にする（資格名・発行元 / 取得年 / 証明リンク）
const CertList = styled.ul`
  list-style: none;
  max-width: 900px;
  padding: 0;
  margin: 0 auto;
`;

const Line = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: baseline;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const CertName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  line-height: 1.5;
`;

const Issuer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
`;

const CertLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CertLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentText};
  text-decoration: none;
  white-space: nowrap;

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

// 行に出すのは取得年だけ（月は個別の証明書に書いてある）
const yearOnly = (year) => (/(\d{4})年/.exec(year || '') || [])[1] || year;

// トップページに開いた状態で出すのは topPage: true の5件。残りは折りたたみの中
const primary = sortedCertifications.filter((cert) => cert.topPage);
const others = sortedCertifications.filter((cert) => !cert.topPage);

const CertLines = ({ items }) => (
  <CertList>
    {items.map((cert) => {
      const label = cert.shortName ?? cert.name;
      return (
        <Line key={cert.name}>
          <div>
            <CertName>{label}</CertName>
            {cert.issuer && <Issuer>{cert.issuer}</Issuer>}
          </div>
          {cert.year && <Year>{yearOnly(cert.year)}</Year>}
          <CertLinks>
            {cert.link && (
              <CertLink
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} の証明`}
              >
                証明 ↗
              </CertLink>
            )}
            {cert.pdfLink && (
              <CertLink
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} の認定証PDF`}
              >
                PDF ↗
              </CertLink>
            )}
          </CertLinks>
        </Line>
      );
    })}
  </CertList>
);

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionTitle title="Certifications" subtitle="資格・認定" />
    <CertLines items={primary} />
    {others.length > 0 && (
      <ExpandInPlace label="すべての資格・修了証を見る →" closeLabel="その他の資格・修了証を閉じる ↑">
        <CertLines items={others} />
      </ExpandInPlace>
    )}
  </Section>
);

export default CertificationsSection;
