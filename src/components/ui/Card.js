import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Card = ({ children, ...props }) => (
  <StyledCard
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    {...props}
  >
    {children}
  </StyledCard>
);

export default Card;
