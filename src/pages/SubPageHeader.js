import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Level 2 ページ共通のヘッダ。「今どこにいるか」と「戻り道」だけを出す。
const Wrapper = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `9rem ${theme.spacing.xl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `7rem ${theme.spacing.md} ${theme.spacing.lg}`};
  }
`;

const Back = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const Lead = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  max-width: 46rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SubPageHeader = ({ title, lead }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Back onClick={() => navigate('/')}>← トップへ戻る</Back>
      <Title>{title}</Title>
      {lead && <Lead>{lead}</Lead>}
    </Wrapper>
  );
};

export default SubPageHeader;
