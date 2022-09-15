import React from 'react';
import styled from 'styled-components';
import img from '../imagenes/7445.webp'
import { GenresCard } from './GenresCard';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Pagination } from './Pagination';

const ButtonGroup = styled.div`
margin-left: 90px;
height: fit-content;
width: fit-content;
display: inline;
grid-template-columns: max-content;
justify-content: center;
`;

const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
`;

export const Genres = ({ genres }) => {

  const reduxState = useSelector(state => state.videogameFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = reduxState.slice(indexOfFirstGame, indexOfLastGame)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div>
      <ButtonGroup>
        {
          genres?.map(e => <GenresCard e={e} key={genres.indexOf(e)} setCurrentPage={setCurrentPage} />)
        }
      </ButtonGroup>
      <MyContainer>
        {
        reduxState[0] && currentGames.map(e => <Card
          key={e.id}
          id={e.id}
          name={e.name}
          platforms={e.platforms}
          rating={e.rating}
          genres={e.genres}
          image={e.image}
        />)}
        <div>
          <Pagination gamesPerPage={gamesPerPage} totalGames={reduxState.length} paginate={paginate} currentPage={currentPage} />
        </div>
      </MyContainer>
    </div>
  )
}
