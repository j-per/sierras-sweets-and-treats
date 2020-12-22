import React from 'react';
import Cupcake from '../images/cupcake.jpg';
import SEO from '../components/seo';
import styled from 'styled-components';
import ImageGrid from '../components/imagegrid';

const Hero = styled.div`
  background-image: url(${Cupcake});
  background-position: center;
  height: 538px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 70px;
  h1 {
    color: var(--white);
    padding: 1rem;
    font-size: 60px;
  }
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <h1>Delicious Treats, Made Fresh to Order</h1>
    </Hero>
    <ImageGrid />
  </>
);

export default IndexPage;
