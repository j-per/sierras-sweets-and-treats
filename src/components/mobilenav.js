import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Logo from '../images/sierras-sweets-and-treats-logo.jpg';
import styled from 'styled-components';
import './mobilemenu.css';

const BurgerMenu = () => {
  return (
    <Menu right>
      <Link to="/gallery">Gallery</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/order">Order</Link>
    </Menu>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 1rem;
  height: 90px;
  width: auto;
`;

const MobileNav = () => (
  <Wrapper>
    <Image src={Logo} />
    <BurgerMenu />
  </Wrapper>
);

export default MobileNav;
