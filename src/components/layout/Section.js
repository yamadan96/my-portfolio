import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled.section`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  }
`;

// 控えめなフェードインだけ。動きで注意を引かず、読み進める邪魔をしない
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const Section = ({ id, children, ...props }) => (
  <StyledSection id={id} {...props}>
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  </StyledSection>
);

export default Section;
