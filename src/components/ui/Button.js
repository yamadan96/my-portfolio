import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 2px solid transparent;

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.gradient};
          color: white;
          &:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            color: white;
          }
        `
      : css`
          background: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: white;
          }
        `}
`;

const Button = ({ children, variant = 'primary', href, onClick, ...props }) => (
  <StyledButton
    $variant={variant}
    href={href}
    onClick={onClick}
    whileTap={{ scale: 0.97 }}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
