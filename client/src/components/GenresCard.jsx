import React from 'react'
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { genresFilter } from '../Redux/actions';
// import { Card } from './Card';
import styled from 'styled-components';
// import img from '../imagenes/7445.webp'

const MyDiv = styled.div`
    display: inline-block;
`;

export const GenresCard = ({ e }) => {

    const dispatch = useDispatch();

    return (
        <MyDiv>
            <button onClick={() => dispatch(genresFilter(e))}>{e}</button>
        </MyDiv>
    )
}
