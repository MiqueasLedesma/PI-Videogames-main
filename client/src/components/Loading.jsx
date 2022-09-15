import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const MyDiv = styled.div`
  border: 15px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  animation: ${Spin} 1.5s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;

`;


export const Loading = () => {
  return (
    <>
      <MyDiv></MyDiv>
    </>
  )
}
