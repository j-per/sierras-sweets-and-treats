import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 48px;
`;

const ImageGrid = () => (
  <div>
    <Heading>Treats</Heading>
    <input type="checkbox" id="scales" name="scales" />
    <label for="scales">Scales</label>
    <br />
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Horns</label>
  </div>
);

export default ImageGrid;
