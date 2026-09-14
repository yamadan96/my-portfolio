import React from 'react';
import styled from 'styled-components';
import profile from '../../data/profile';
import SocialIcons from '../ui/SocialIcons';

// 著作権表示と外部プロフィール（GitHub / LinkedIn / Qiita / Zenn）。
// SNS はどのセクションにも置かず、全ページ共通のここに1か所だけアイコンで置く
const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.accentText};
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const footerLinks = profile.social.filter((s) => profile.footerSocial.includes(s.platform));

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <span>
        &copy; {new Date().getFullYear()} {profile.nameEn}
      </span>
      <FooterLinks aria-label="外部プロフィール">
        <SocialIcons links={footerLinks} />
      </FooterLinks>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
