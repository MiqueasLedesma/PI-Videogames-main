import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import img from '../imagenes/7445.webp'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { sortGamesLowMax, SortGamesLowMaxA, SortGamesLowMaxB, sortGamesMaxLow } from '../Redux/actions';

const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
@media (max-width: 768px) {
  grid-template-columns: auto auto auto auto;
  @media(max-width: 500px){
  grid-template-columns: auto;
}
}
`;

const MyDiv = styled.div`
    display: inline-block;
    height: fit-content;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const MyButton = styled.button`
  background-color: #4CAF50;
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

const inUse = {
  backgroundColor: 'red',
  fontSize: 16 + 'px'
}

export const Videogames = () => {

  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.videogames);
  const reduxState2 = useSelector(state => state.sortBy);

  const handleSortA = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(sortGamesLowMax());
  };

  const handleSortB = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(sortGamesMaxLow());
  };

  const handleSortBA = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(SortGamesLowMaxA());
  };

  const handleSortAB = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(SortGamesLowMaxB());
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = reduxState.slice(indexOfFirstGame, indexOfLastGame)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (<>
    <MyDiv>
      <MyButton onClick={(e) => handleSortA(e)} style={reduxState2 === 'ABC' ? inUse : null}>A-Z</MyButton>
      <MyButton onClick={(e) => handleSortB(e)} style={reduxState2 === 'CBA' ? inUse : null}>Z-A</MyButton>
      <MyButton onClick={(e) => handleSortBA(e)} style={reduxState2 === '15' ? inUse : null}>1-5</MyButton>
      <MyButton onClick={(e) => handleSortAB(e)} style={reduxState2 === '51' ? inUse : null}>5-1</MyButton>
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
        <Pagination gamesPerPage={gamesPerPage} totalGames={reduxState.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </MyContainer>
  </>

  )
}
