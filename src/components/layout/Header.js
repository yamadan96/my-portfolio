import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../../theme/ThemeToggle';
import useScrollSpy from '../../hooks/useScrollSpy';

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme, $scrolled }) => ($scrolled ? theme.colors.glassBg : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(8px)' : 'none')};
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: background ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};
`;

const NavInner = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

const Logo = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 2px 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.textSecondary)};
  border-bottom: 1px solid ${({ theme, $active }) => ($active ? theme.colors.text : 'transparent')};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
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
  width: 22px;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.text};
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.background};
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

// トップページのセクション順と一致させる（MainPage.js）
const sections = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];
const sectionIds = ['hero', ...sections.map((s) => s.id)];

// トップに載せない網羅情報（全経歴・受賞・資格・執筆）は CV ページに置く
const cvPath = '/more';

const Header = ({ isDark, onThemeToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMain = location.pathname === '/';
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    setMobileOpen(false);
    if (!isMain) {
      // 下層ページからは トップへ遷移してから該当セクションへ（MainPage が hash を読んでスクロールする）
      navigate({ pathname: '/', hash: id });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToCv = () => {
    setMobileOpen(false);
    navigate(cvPath);
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavInner>
          <Logo onClick={() => goToSection('hero')} aria-label="トップへ">
            Yuto Yamada
          </Logo>
          <NavLinks aria-label="サイト内ナビゲーション">
            {sections.map((section) => (
              <NavLink
                key={section.id}
                $active={isMain && activeId === section.id}
                onClick={() => goToSection(section.id)}
              >
                {section.label}
              </NavLink>
            ))}
            <NavLink $active={location.pathname === cvPath} onClick={goToCv}>
              CV
            </NavLink>
          </NavLinks>
          <RightGroup>
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <Hamburger onClick={() => setMobileOpen(true)} aria-label="メニューを開く">
              <HamburgerLine />
              <HamburgerLine />
              <HamburgerLine />
            </Hamburger>
          </RightGroup>
        </NavInner>
      </Nav>
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CloseButton onClick={() => setMobileOpen(false)} aria-label="メニューを閉じる">
              ✕
            </CloseButton>
            <MobileNavLink onClick={() => goToSection('hero')}>Home</MobileNavLink>
            {sections.map((section) => (
              <MobileNavLink key={section.id} onClick={() => goToSection(section.id)}>
                {section.label}
              </MobileNavLink>
            ))}
            <MobileNavLink onClick={goToCv}>CV</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
