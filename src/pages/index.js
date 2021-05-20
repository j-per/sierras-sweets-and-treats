import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Cupcake from '../images/cupcake.jpg';
import SEO from '../components/seo';
import styled from 'styled-components';
import GlobalButton from '../components/globalbutton';
import TestimonialCard from '../components/testimonialcard';
import WavesDivider from '../components/wavesDivider';
import TreatCard from '../components/treatcard';

const IndexPage = () => {
  // const treats = ["Cakes", "Cupcakes", "Macaroons", "Cinnamon Rolls", "Cookies", "Rice Krispy Treats", "Dipped Pretzels"];
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count => count === 6 ? count = 0 : count + 1);
  //   },1500)
  // }, []);

  // useEffect(() => {
  //   console.log('count changed');
  // }, [count]);

  return (
  <>
    <SEO title="Home" />
    <HeroStyles>
      <h1>Sierras Sweets and Treats</h1>
    </HeroStyles>
    <AboutStyles>
      <div className="about_text">
        <h2>The best treats in the Inland Empire</h2>
        <p>We also had a hard time remembering our own recipes. So, why not make an awesome website? Here is some more text about how a local business is awesome. We make the best cakes in Menifee and always deliver on time.</p>
        <Link to='/menu'>
        <GlobalButton textContent="Menu" />
        </Link>
      </div>
      <div className="about_image">
        <img src="https://images.unsplash.com/photo-1605329540489-afc28d074eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </div>
    </AboutStyles>
    <OfferStyles>
      <div className="offerstyles_section">
        <div>
          <img src="https://picsum.photos/400/300?random=6" />
        </div>
        <div className="offerstyles_text">
          <h3>Cupcakes</h3>
          <p>Here is a blurb about how we make the cupcakes and how delicious they are</p>
        </div>
      </div>
      <div className="offerstyles_section">
        <div>
          <img src="https://picsum.photos/400/300?random=6" />
        </div>
        <div className="offerstyles_text">
          <h3>Cupcakes</h3>
          <p>Here is a blurb about how we make the cupcakes and how delicious they are</p>
        </div>
      </div>
      <div className="offerstyles_section">
        <div>
          <img src="https://picsum.photos/400/300?random=6" />
        </div>
        <div className="offerstyles_text">
          <h3>Cupcakes</h3>
          <p>Here is a blurb about how we make the cupcakes and how delicious they are</p>
        </div>
      </div>
    </OfferStyles>
    <TestimonialStyles>
      <TestimonialCard 
        blurb="Anywhere from the cakes, macaroons, to the cookies, even dog treats are amazing!"
        name="Celene D."  
        image="https://s3-media0.fl.yelpcdn.com/photo/HHVhU0BPl4g-LfuzI20nQA/ls.jpg"    
      />
      <TestimonialCard 
        blurb="Sierra did a beautiful unicorn cake for my grand daughter's 6th birthday During quarantine. The designed was exactly like we discussed over the phone it looked great. The inside was custom. We wanted a sprinkle cake with strawberry filling and buttercream icing. When you cut into the cake it was fun and full of layers, but most important it was delicious. Everyone loved it and there was no left over cake because everyone ate it up. I would highly recommend Sierra's sweets and treats."
        name="Genevieve M." 
        image="https://s3-media0.fl.yelpcdn.com/photo/NcFuL2SROn9oCLQHqJFKzw/ls.jpg" 
      />
      <TestimonialCard 
        blurb="I ordered from Sierra's Sweets and Treats for my sister's birthday! She customized my order and drove to OC to deliver her sweets! Her customer service was the best!  The strawberry cake was flavorful and the frosting was not too sweet. I loved working with her and look forward to my next birthday celebration with her!"
        name="Elizabeth W."  
        image="https://s3-media0.fl.yelpcdn.com/photo/ek6vMvt_ITyLO3sG8SvJ4g/ls.jpg"
      />
    </TestimonialStyles>
    <ImageGridStyles >
      <img src="https://picsum.photos/300/300?random=1" />
      <img src="https://picsum.photos/300/300?random=2" />
      <img src="https://picsum.photos/300/300?random=3" />
      <img src="https://picsum.photos/300/300?random=4" />
      <img src="https://picsum.photos/300/300?random=5" />
      <img src="https://picsum.photos/300/300?random=6" />
    </ImageGridStyles>
    <ContactStyles>
      <h2>Intersted in placing an order? Let's get started!</h2>
      <Link to="/contact">
        <GlobalButton textContent="Order" />
      </Link>
    </ContactStyles>
  </>
);
}

const HeroStyles = styled.section`
  background: 
  linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    ),
  url(${Cupcake});
  background-position: center;
  height: 538px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
  h1 {
    color: var(--white);
    padding: 1rem;
    font-size: 60px;
  }
`;

const AboutStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 42px;
  margin-bottom: 50px;
  p { 
    line-height: 1.5;
  }
  button {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  .about_text {
    align-self: center;
  }
  img {
    border-radius: 5px;
    object-fit: cover;
    max-width: 100%;
    align-self: center;
  }
`;

const OfferStyles = styled.section`
  border-radius: 5px;
  padding: 1rem 0;
  margin-bottom: 50px;
  .offerstyles_section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .offerstyles_text {
      padding: 1rem;
      border-radius: 5px;
      background: white;
    }
    img {
    border-radius: 5px;
    }
    h3 {
      font-size: 30px;
      color: var(--lightBlue);
    }
  }
`;

const TestimonialStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const ImageGridStyles = styled.section`
  display: flex;
  overflow: scroll;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const ContactStyles = styled.section`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 20px;
    font-size: 40px;
  }
`;

export default IndexPage;
