import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterStyles className='ignorewidth'>
      <div className='footerstyles_wrapper'>
        <div className='footerstyles_heading_wrapper'>
          <h2>
            <Link to='/'>Sierra's Sweets and Treats</Link>
          </h2>
          <p>Sierra's Sweets and Treats © 2021 — Present</p>
          <div className='footerstyles_links_wrapper'>
          <Link to='/menu'>Menu</Link>
          <Link to='/menu'>Order</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        </div>
        <div className='footerstyles_icon_wrapper'>
            <a href="https://www.instagram.com/sierrassweetsandtreats/" target="__blank">
                <FiInstagram size={40}/>
            </a>
            <a href="https://www.facebook.com/sierrassweetsandtreatss/" target="__blank">
                <AiOutlineFacebook size={40} />
            </a>
        </div>
        
      </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background: var(--pink);
  border-top: solid 2px var(--brown);
  .footerstyles_wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 0;
      font-size: 30px;
    }
    a {
      color: var(--brown);
    }
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .footerstyles_heading_wrapper {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .footerstyles_icon_wrapper {
      align-self: center;
  }
  .footerstyles_links_wrapper {

    p {
      color: var(--brown);
      text-decoration: underline;
    }
    a {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--brown);
    }
  }
`;

export default Footer;