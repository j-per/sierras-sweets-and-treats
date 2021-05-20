import React from 'react';
import styled from 'styled-components';

const TreatCard = ({image, heading, blurb}) => {
    return(
        <TreatCardStyles>
            <div>
                <img src={image} />
                <h3>{heading}</h3>
                <p>{blurb}</p>
            </div>
        </TreatCardStyles>
    );
}

const TreatCardStyles = styled.div`
  div {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  img {
      border-radius: 5px;
  }
`;

export default TreatCard;