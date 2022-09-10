import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { Redirect } from 'react-router-dom';

const Card = styled.div`
  margin-top: -21px;
  background-color: #333;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  text-align: center;
  font-family: arial;
`;

const MyP = styled.p`
  color: grey;
  font-size: 22px;
`;

const MyTextArea = styled.textarea`
resize: none;
height: 40%;
width: 60%;
margin-bottom: 10px;
`;

const imgStyle = {
  width: '60%'
}

export const Details = () => {

  const detail = useSelector(state => state.videogameDetails)

    return (
      <Card>
        <h1>{detail.name}</h1>
        <img src={detail.image} alt="Loading..." style={imgStyle} />
        <MyP>{detail.platforms}</MyP>
        <MyP>{detail.genres}</MyP>
        <MyP>Rate:{detail.rating}</MyP>
        <MyP>Description:</MyP>
        <MyTextArea name="" id="" cols="30" rows="10">{detail.description}</MyTextArea>
      </Card>
    )
};
