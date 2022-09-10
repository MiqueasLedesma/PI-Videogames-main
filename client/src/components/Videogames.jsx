import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import img from '../imagenes/7445.webp'

const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
`;

export const Videogames = (info) => {
  return (
    <MyContainer>
      {
        info?.info?.map(e => <Card
          key={e.id}
          id={e.id}
          name={e.name}
          platforms={e.platforms}
          rating={e.rating}
          genres={e.genres}
          image={e.image}
        />)
      }
    </MyContainer>
  )
}
