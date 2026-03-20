import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ThemeToggle from '../../theme/ThemeToggle';
import useScrollSpy from '../../hooks/useScrollSpy';

const Nav = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.glassBg : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(20px)' : 'none')};
  border-bottom: 1px solid ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.glassBorder : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  text-decoration: none;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textSecondary};
  cursor: pointer;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $active, theme }) =>
    $active &&
    `&::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.colors.gradient};
      border-radius: 1px;
    }`}
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 1px;
  transition: all ${({ theme }) => theme.transitions.fast};
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const MobileNavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ isDark, onThemeToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isMain = location.pathname === '/';
  const activeId = useScrollSpy(
    sections.map((s) => s.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (!isMain) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavInner>
          <Logo onClick={() => scrollToSection('hero')}>Y.Yamada</Logo>
          {isMain && (
            <NavLinks>
              {sections.slice(1).map((section) => (
                <NavLink
                  key={section.id}
                  $active={activeId === section.id}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </NavLink>
              ))}
            </NavLinks>
          )}
          <RightGroup>
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            {isMain && (
              <Hamburger onClick={() => setMobileOpen(true)}>
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
              </Hamburger>
            )}
          </RightGroup>
        </NavInner>
      </Nav>
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileOpen(false)}>✕</CloseButton>
            {sections.map((section) => (
              <MobileNavLink
                key={section.id}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
