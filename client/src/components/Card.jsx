import React from 'react'
import styled from 'styled-components';

const MyCard = styled.div`
  opacity: 0.7;
  margin: 7px;
  padding: 7px;
  height: fit-content;
  width: 180px;
  background-color: #3a352f;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
  &:hover {
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
    opacity: 1;
  }
`;

const MyContainer = styled.div`
  padding: 2px 16px;
  color:white;
  background-color: #3a352f;
`;

const MyImg = styled.img`
width:180px;
height:180px;
`;

const MyH4 = styled.h4`
background-color:#3a352f
`;

const MyP = styled.p`
background-color:#3a352f
`;

const MyStrong = styled.strong`
background-color:#3a352f
`;

export const Card = ({ name, rating, image, id }) => {
  return (
    <MyCard onClick={() => console.log(id)}>
      <MyImg src={`${image}`} alt="Error!" />
      <MyContainer>
        <MyH4>{`${name}`}</MyH4>
        <MyP><MyStrong>Rating:</MyStrong> {`${rating}`}</MyP>
        {/* <p><strong>Plataformas:</strong> {`${platforms}`}</p> */}
      </MyContainer>
    </MyCard>
  )
}