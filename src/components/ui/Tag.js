import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.primary}15`};
  color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
`;

const Tag = ({ children }) => <StyledTag>{children}</StyledTag>;

export default Tag;
