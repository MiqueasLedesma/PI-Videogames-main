import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getVideogameByID } from '../Redux/actions';
import { useDispatch } from 'react-redux';

const MyCard = styled.div`
  opacity: 0.4;
  margin: 7px;
  padding: 7px;
  height: fit-content;
  width: 180px;
  background-color: #3a352f;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
  &:hover {
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
    opacity: 1;
  }
`;

const MyContainer = styled.div`
  padding: 2px 8px;
  color:white;
  background-color: #3a352f;
`;

const MyImg = styled.img`
width:180px;
height:180px;
`;

const MyH4 = styled.h4`
background-color:#3a352f
`;

//LOGICA!
//---------------------------------------------------------------------------------------------------------------------------------------------

export const Card = ({ name, image, id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(getVideogameByID(id))
  }

  return (
    <Link to={'/videogameDetails'} onClick={(e) => handleClick(id)}>
      <MyCard>
        <MyImg src={`${image}`} alt="Not image Found!" />
        <MyContainer>
          <MyH4>{`${name}`}</MyH4>
        </MyContainer>
      </MyCard>
    </Link>
  )
}

