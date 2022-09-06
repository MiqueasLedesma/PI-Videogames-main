import React from 'react'
import styled from 'styled-components';

const MyCard = styled.div`
  margin: 7px;
  padding: 7px;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const MyContainer = styled.div`
  padding: 2px 16px;
`;

const MyImg = styled.img`
width:280px;
height:280px;
transition: 0.4s;
&:hover {
width:340px;
height:340px;
}
`;

export const Card = ({ name, platforms, rating, genres, id, image }) => {
  return (
    <MyCard>
      <MyImg src={`${image}`} alt="Error!" />
      <MyContainer>
        <h4><b>{`${name}`}</b></h4>
        <p><strong>Rating:</strong> {`${rating}`}</p>
        <p><strong>Plataformas:</strong> {`${platforms}`}</p>
      </MyContainer>
    </MyCard>
  )
}