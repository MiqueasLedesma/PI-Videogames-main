import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const MyContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
margin-top: 20px;
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
