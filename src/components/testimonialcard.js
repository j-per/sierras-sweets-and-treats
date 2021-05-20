import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';

const TestimonialCard = ({blurb, name, image}) => {

    const shortenBlurb = blurb => {
        if (blurb.length > 123) {
          const splitBlurb = blurb.split("");
          splitBlurb.length = 123;
          const returnedBlurb = `${splitBlurb.join("")}...`;
          return returnedBlurb;
        } else {
          return blurb;
        }
      };

    return(
        <TestimonialCardStyles>
            <div className='top'>
              <p>{shortenBlurb(blurb)}</p>
              <a href="https://www.yelp.com/biz/sierra-s-sweets-and-treats-menifee" target="__blank">
              More...
              </a>
            </div>
            <div className='bottom'>
                <img src={image} />
                <h3>{name}</h3>
                <div className='stars'>
                    <AiFillStar size={23} fill={'#F6D032'} />
                    <AiFillStar size={23} fill={'#F6D032'} />
                    <AiFillStar size={23} fill={'#F6D032'} />
                    <AiFillStar size={23} fill={'#F6D032'} />
                    <AiFillStar size={23} fill={'#F6D032'} />
                </div>
            </div>
        </TestimonialCardStyles>
    );
}

const TestimonialCardStyles = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    position: relative;
    border: 2px solid var(--brown);
    .top {
        height: 100%;
        background-color: var(--pink);
        border-radius: 5px 5px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid var(--brown);
        position: relative;
        a {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            padding: .2rem .5rem;
            border-radius: 2px;
            background-color: var(--lightBlue);
            color: white;
        }
    }
    .bottom {
        height: 50%;
        background-color: white;
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        padding: 1rem;
    }
    .stars {
        margin-left: auto;
    }
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: .4rem;
    }
`;

export default TestimonialCard;