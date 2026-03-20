import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../ui/SocialIcons';
import profile from '../../data/profile';

const FooterWrapper = styled.footer`
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <SocialWrapper>
        <SocialIcons links={profile.social} />
      </SocialWrapper>
      <Copyright>&copy; {new Date().getFullYear()} {profile.nameEn}. All rights reserved.</Copyright>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
