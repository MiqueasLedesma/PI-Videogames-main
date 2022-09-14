import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import img from '../imagenes/7445.webp'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Pagination } from './Pagination';


const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
`;



export const SearchResults = () => {
    const reduxState = useSelector(state => state.searchResults)

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = reduxState.slice(indexOfFirstGame, indexOfLastGame)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
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
    )
}
