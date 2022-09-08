import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const MyContainer = styled.div`
display: grid;
margin-left: 60px;
grid-template-columns: auto auto auto auto;
width: 100%;
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
