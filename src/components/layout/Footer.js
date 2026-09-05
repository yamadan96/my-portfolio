import React from 'react';
import styled from 'styled-components';
import profile from '../../data/profile';

// 著作権表示だけ。SNS・外部プロフィールへのリンクは About/Contact に1か所だけ置く
const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      &copy; {new Date().getFullYear()} {profile.nameEn}
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
