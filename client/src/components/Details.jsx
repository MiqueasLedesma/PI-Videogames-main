import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Loading } from './Loading';

const Card = styled.div`
  margin-top: -21px;
  margin-bottom: -22px;
  background-color: #333;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  height: fit-content;
  text-align: center;
  font-family: arial;
`;

const MyP = styled.p`
  color: grey;
  font-size: 22px;
`;

const imgStyle = {
  width: '60%'
}

export const Details = () => {
  const detail = useSelector(state => state.videogameDetails);
  const redirect = useSelector(state => state.videogames);

  console.log(detail)

  if (!redirect[0]) {
    return (
      <>
        <Redirect to={'/'} />
      </>
    );
  }
  else
    return (
      <>

        {detail.name ?
          <Card>
            <h1>{detail.name}</h1>
            <img src={detail.image} alt="Loading..." style={imgStyle} />
            <MyP>{detail.platforms}</MyP>
            <MyP>{Array.isArray(detail.genres) ? detail.genres.map(e => e.name) : detail.genres}</MyP>
            <MyP>Rate:{detail.rating}</MyP>
            <MyP>Released:{detail.released}</MyP>
            <MyP>Description:</MyP>
            <MyP>{detail.description}</MyP>
          </Card> : <Loading />
        }
      </>
    );
};
