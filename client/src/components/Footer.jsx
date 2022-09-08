import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
   position: fixed;
   left: 0;
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
            <h4>PI - Miqueas Ledesma - Henry</h4>
        </MyDiv>
    )
}
