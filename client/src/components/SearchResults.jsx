import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import img from '../imagenes/7445.webp'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { Redirect } from 'react-router-dom';


const MyContainer = styled.div`
height: fit-content;
display: grid;
grid-template-columns: auto auto auto auto auto auto;
justify-content: center;
background-image: url(${img});
background-size: cover;
`;



export const SearchResults = () => {

    const reduxState = useSelector(state => state.searchResults);
    const reduxState2 = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = reduxState.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (!reduxState2[0]) return (
        <>
            <Redirect to={'/'} />
        </>
    )
    else
        return (
            <MyContainer>
                {
                    reduxState && currentGames.map(e => <Card
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        image={e.image}
                    />)
                }
                <div>
                    <Pagination gamesPerPage={gamesPerPage} totalGames={reduxState.length} paginate={paginate} currentPage={currentPage}/>
                </div>
            </MyContainer>
        )
}
