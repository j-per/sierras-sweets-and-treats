import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import FadeIn from './fadein';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 620px;
  margin-bottom: 70px;
`;

const ImageGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-auto-rows: 300px;
  grid-gap: 20px;
  justify-content: center;
`;

const BoxImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  object-fit: cover;
  position: relative;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin: 5px 5px 5px 0;
`;

const ImageGrid = () => {

  const [checkedTreats, setCheckedTreats] = useState({
    wedding: false,
    birthday: false,
    babyshower: false,
    cookies: false,
    holiday: false,
  });

  const test = [
    {
      type: "wedding",
      display: 'A wedding cake',
      image: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/pastries-756601_960_720.jpg'
    },
    {
      type: "wedding",
      display: 'A wedding cake',
      image: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/pastries-756601_960_720.jpg'
    },
    {
      type: "wedding",
      display: 'A wedding cake',
      image: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/pastries-756601_960_720.jpg'
    },
    {
      type: "wedding",
      display: 'A wedding cake',
      image: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/pastries-756601_960_720.jpg'
    },
    {
      type: "birthday",
      display: 'A birthday cake',
      image: 'https://cdn.pixabay.com/photo/2017/05/23/22/33/happy-birthday-2338813_960_720.jpg'
    },
    {
      type: "babyshower",
      display: 'A baby shower cake',
      image: 'https://cdn.pixabay.com/photo/2019/12/04/18/40/biscuit-with-mice-4673368_960_720.jpg'
    },
    {
      type: "cookies",
      display: 'A cookie',
      image: 'https://cdn.pixabay.com/photo/2015/11/19/20/17/christmas-cookies-1051884_960_720.jpg'
    },
    {
      type: "babyshower",
      display: 'A baby shower cake',
      image: 'https://cdn.pixabay.com/photo/2019/12/04/18/40/biscuit-with-mice-4673368_960_720.jpg'
    },
    {
      type: "holiday",
      display: 'A holiday cake',
      image: 'https://cdn.pixabay.com/photo/2016/12/17/20/52/cake-1914463_960_720.jpg'
    },
    {
      type: "babyshower",
      display: 'A baby shower cake',
      image: 'https://cdn.pixabay.com/photo/2019/12/04/18/40/biscuit-with-mice-4673368_960_720.jpg'
    },
    {
      type: "babyshower",
      display: 'A baby shower cake',
      image: 'https://cdn.pixabay.com/photo/2019/12/04/18/40/biscuit-with-mice-4673368_960_720.jpg'
    },
  ];

  const handleChange = (event) => {
    if(event.target.checked) {
      setCheckedTreats({
        ...checkedTreats,
        [event.target.name]: true,
      });
    } else {
      setCheckedTreats({
        ...checkedTreats,
        [event.target.name]: false,
      });
    }
  };

  return (
    <Wrapper>
      <div>
        <h2>Treats</h2>
        <CheckBox onChange={handleChange} type="checkbox" id="wedding" name="wedding" />
        <label htmlFor="wedding">Wedding</label>
        <br />
        <CheckBox onChange={handleChange} type="checkbox" id="birthday" name="birthday"  />
        <label htmlFor="birthday">Birthday</label>
        <br />
        <CheckBox onChange={handleChange} type="checkbox" id="babyshower" name="babyshower"  />
        <label htmlFor="babyshower">Baby Shower</label>
        <br />
        <CheckBox onChange={handleChange} type="checkbox" id="cookies" name="cookies"  />
        <label htmlFor="cookies">Cookies/Convections</label>
        <br />
        <CheckBox onChange={handleChange} type="checkbox" id="holiday" name="holiday"  />
        <label htmlFor="holiday">Holiday</label>
      </div>
      <ImageGridWrapper>
        {test.map(item => {
          if(checkedTreats[item.type] === true) {
            return (
            <FadeIn>
              <BoxImage src={item.image} />
            </FadeIn>
          )
          }
        })}
      </ImageGridWrapper>
    </Wrapper>
  );
}

export default ImageGrid;
