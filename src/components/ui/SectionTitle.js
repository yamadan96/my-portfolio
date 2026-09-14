import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1.25rem;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionTitle = ({ title, subtitle }) => (
  <TitleWrapper>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </TitleWrapper>
);

export default SectionTitle;
