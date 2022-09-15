import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
   height: 16px;
`;


export const Footer = () => {
    return (
        <MyDiv>
            <h5>PI - Miqueas Ledesma - Henry</h5>
        </MyDiv>
    )
}
