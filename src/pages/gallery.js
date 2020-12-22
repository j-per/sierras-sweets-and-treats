import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 245px));
  grid-auto-rows: 245px;
  grid-gap: 20px;
  justify-content: center;
`;

const Image = styled.img`
  border-radius: 5px;
  width: 245px;
  height: 245px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    cursor: pointer;
  }
`;

const Gallery = () => {
  const [userPhotos, setUserPhotos] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=20')
      .then((res) => res.json())
      .then((data) => setUserPhotos(data))
      .then(() => console.log(userPhotos))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <Wrapper>
        {userPhotos
          ? userPhotos.map((photo) => (
              <Image src={photo.download_url} key={photo.id} />
            ))
          : ''}
      </Wrapper>
    </section>
  );
};

export default Gallery;
