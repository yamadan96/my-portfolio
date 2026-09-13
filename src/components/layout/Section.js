import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 上下余白は 6rem → 3.5rem（モバイル 4rem → 2.5rem）に詰め、
// 詰めた分はセクション間の細い区切り線で境界を示す
const StyledSection = styled.section`
  position: relative;
  padding: 3.5rem ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  & + &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.5rem ${({ theme }) => theme.spacing.md};

    & + &::before {
      left: ${({ theme }) => theme.spacing.md};
      right: ${({ theme }) => theme.spacing.md};
    }
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Section = ({ id, children, ...props }) => {
  return (
    <StyledSection id={id} {...props}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.div>
    </StyledSection>
  );
};

export default Section;
