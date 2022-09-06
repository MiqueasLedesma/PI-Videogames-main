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
position: absolute;
  border: 15px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  animation: ${Spin} 1.5s linear infinite;
  top: 30%;
  left: 40%;
`;

const MyH2 = styled.h2`
  position: absolute;
  top: 70%;
  left: 38%;
`;

export const Loading = () => {
    return (
        <>
        <MyDiv></MyDiv>
        <MyH2><strong>LOADING PLEASE AWAIT...</strong></MyH2>
        </>
    )
}
