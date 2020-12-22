import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function Card({ link, title, image, description }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Img fixed={image} />
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border: 2.5px solid black;
  padding: 0.5rem;
  box-shadow: 2px 2px 0 0 black;
`;
