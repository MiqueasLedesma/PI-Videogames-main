import React from 'react';
import styled from 'styled-components';
import img from '../imagenes/7445.webp'

const MyBackground = styled.div`
margin-top: -21px;
height: 100vh;
background-image: url(${img});
background-size: cover;
`;


export const Genres = () => {
  return (
    <MyBackground><h1>Aca vendria el componente generos</h1></MyBackground>
  )
}
