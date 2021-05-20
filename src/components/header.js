import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../images/sierras-sweets-and-treats-logo.jpg';
import GlobalButton from '../components/globalbutton';
import { slide as Menu } from 'react-burger-menu';
import MobileNav from '../components/mobilenav';

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MobileNav />
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <Image src={Logo} />
          </Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <GlobalButton textContent="Contact" />
        </li>
      </ul>
    </Nav>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  margin: 1.45rem 0;
  height: 90px;
`;

const Nav = styled.nav`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  @media (max-width: 768px) {
    display: none;
  }
  ul {
    padding: 0;
    margin: 0;
    height: 90px;
    display: flex;
    list-style: none;
    align-items: center;
  }
  li {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    padding-right: 50px;
    &:last-child {
      margin-left: auto;
      padding-right: 0;
    }
  }
`;

const Image = styled.img`
  height: 100px;
  width: auto;
`;

export default Header;
