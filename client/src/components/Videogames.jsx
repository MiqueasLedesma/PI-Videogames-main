import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import img from '../imagenes/7445.webp'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { sortGamesLowMax, sortGamesMaxLow } from '../Redux/actions';

const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
`;

const MyDiv = styled.div`
    display: inline-block;
    height: fit-content;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const MyButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  transition: 0.3s;
  &:hover {
    background-color: black;
    font-size: 14px;
    padding: 10px 14px;
  }
`;


export const Videogames = () => {

  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.videogames);
  console.log(reduxState);

  const handleSortA = (e) => {
    e.preventDefault();
    dispatch(sortGamesLowMax());
  }

  const handleSortB = (e) => {
    e.preventDefault();
    dispatch(sortGamesMaxLow());
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = reduxState.slice(indexOfFirstGame, indexOfLastGame)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (<>
    <MyDiv>
      <MyButton onClick={(e) => handleSortA(e)}>A-Z</MyButton>
      <MyButton onClick={(e) => handleSortB(e)}>Z-A</MyButton>
      <MyButton /* onClick={(e) => handleSortA(e)} */>1-5</MyButton>
      <MyButton /* onClick={(e) => handleSortB(e)} */>5-1</MyButton>
    </MyDiv>
    <MyContainer>
      {
        reduxState && currentGames.map(e => <Card
          key={e.id}
          id={e.id}
          name={e.name}
          platforms={e.platforms}
          rating={e.rating}
          genres={e.genres}
          image={e.image}
        />)
      }
      <div>
        <Pagination gamesPerPage={gamesPerPage} totalGames={reduxState.length} paginate={paginate} />
      </div>
    </MyContainer>
  </>

  )
}
