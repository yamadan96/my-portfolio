import React from 'react';
import styled from 'styled-components';

// セクション見出し。左揃え・上罫線・番号付き。
// 番号（01, 02…）は「いま全体のどこを読んでいるか」を示すためのもので、
// トップページの6セクションで通し番号にする。下層ページでは番号なしで使う。
const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: baseline;
  padding-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-top: 1px solid ${({ theme }) => theme.colors.borderStrong};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Eyebrow = styled.p`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Body = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  max-width: ${({ theme }) => theme.measure};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionTitle = ({ index, eyebrow, title, subtitle }) => {
  const label = [index, eyebrow].filter(Boolean).join(' — ');
  return (
    <Wrapper>
      {label ? <Eyebrow>{label}</Eyebrow> : <span aria-hidden="true" />}
      <Body>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Body>
    </Wrapper>
  );
};

export default SectionTitle;
