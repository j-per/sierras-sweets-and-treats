import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: var(--lightBlue);
  color: var(--white);
  border-radius: 5px;
  height: 42px;
  width: 127px;
  transition: 250ms;
  &:hover {
    cursor: pointer;
    background-color: var(--darkerBlue);
  }
`;
const GlobalButton = ({ textContent }) => <Button>{textContent}</Button>;

export default GlobalButton;
