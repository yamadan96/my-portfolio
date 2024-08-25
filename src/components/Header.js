import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFD700;
  text-decoration: none;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
    padding: 1rem;
  }
`;

const MenuItem = styled.li`
  @media (max-width: 768px) {
    padding: 1rem 0;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #333; /* リンクを黒色に設定 */
  text-decoration: none;

  &:hover {
    color: #FFD700; /* ホバー時は黄色に */
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px;
    transition: all 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      {/* ロゴをクリックするとホームに移動 */}
      <Logo to="/" onClick={closeMenu}>LionTech</Logo>
      <HamburgerIcon className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <StyledLink to="/" onClick={closeMenu}>ホーム</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/about" onClick={closeMenu}>プロフィール</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/portfolio" onClick={closeMenu}>ポートフォリオ</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact" onClick={closeMenu}>連絡先</StyledLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;
