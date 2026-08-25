import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import SocialIcons from '../ui/SocialIcons';
import profile from '../../data/profile';

// このセクションの1メッセージ:
//   「メール1通で連絡が取れる」
// フォームも装飾も置かない。宛先と、返せる相談の種類だけ。
const Body = styled.p`
  max-width: 40rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Mail = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    word-break: break-all;
  }
`;

const Socials = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ContactSection = () => (
  <Section id="contact">
    <SectionTitle title="Contact" subtitle="お問い合わせ" />
    <Body>
      AI/ML の開発・共同研究・採用に関するご連絡はメールでお願いします。
    </Body>
    <Mail href={`mailto:${profile.email}`}>{profile.email}</Mail>
    <Socials>
      <SocialIcons links={profile.social} />
    </Socials>
  </Section>
);

export default ContactSection;
