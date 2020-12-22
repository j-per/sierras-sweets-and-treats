import React from 'react';
import Cupcake from '../images/cupcake.jpg';
import SEO from '../components/seo';
import styled from 'styled-components';
import ImageGrid from '../components/imagegrid';
import GlobalButton from '../components/globalbutton';


const Hero = styled.section`
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

const About = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 42px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
  .about_text {
    align-self: center;
  }
  img {
    width: 500px;
    height: 459px;
    border-radius: 10px;
    object-fit: cover;

  }
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <h1>Delicious Treats, Made Fresh to Order</h1>
    </Hero>
    <ImageGrid />
    <About>
      <div className="about_text">
        <h2>We just want to make the best sweets and treats possible.</h2>
        <p>We also had a hard time remembering our own recipes. So, why not make an awesome website? Here is some more text about how a local business is awesome. We make the best cakes in Menifee and always deliver on time.</p>
        <GlobalButton textContent="Contact" />
      </div>
      <div className="about_image">
        <img src="https://images.unsplash.com/photo-1605329540489-afc28d074eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </div>
    </About>
  </>
);

export default IndexPage;
