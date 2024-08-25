import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #ffffff;
  color: #333333;
  text-align: center;
  padding: 1rem 0;
  margin-top: 4rem;
  border-top: 1px solid #e0e0e0;
`;

const LinkContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: #FFD700;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ffa500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 LionTech. All Rights Reserved.</p>
      <LinkContainer>
        <FooterLink href="https://github.com/yamadan96" target="_blank" rel="noopener noreferrer">
          GitHubのリンク
        </FooterLink>
        <FooterLink href="https://qiita.com/yamadan96" target="_blank" rel="noopener noreferrer">
          Qiitaのリンク
        </FooterLink>
      </LinkContainer>
    </FooterContainer>
  );
};

export default Footer;
