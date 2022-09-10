import React from 'react';
import styled from 'styled-components';
import img from '../imagenes/7445.webp';


const BackGroundDiv = styled.div`
height: 100vh;
background-image: url(${img});
background-size: cover;
`;

export const Home = () => {
  return (
    <BackGroundDiv>
    </BackGroundDiv>
  )
}
