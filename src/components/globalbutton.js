import React from 'react';
import styled from 'styled-components';


const GlobalButton = ({ textContent, pink }) => <Button pink={pink}>{textContent}</Button>;

const Button = styled.button`
  border: none;
  color: var(--white);
  border-radius: 5px;
  height: 42px;
  width: 127px;
  transition: 250ms;
  font-size: 24px;
  background-color: ${props => props.pink ? "#FDE6F0" : "#25C2B9" };
  &:hover {
    cursor: pointer;
    background-color: var(--darkerBlue);
  }
`;

export default GlobalButton;
