import React from 'react'
import { useDispatch } from 'react-redux'
import { genresFilter } from '../Redux/actions';
import styled from 'styled-components';

const MyDiv = styled.div`
    display: inline-block;
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

export const GenresCard = ({ e , setCurrentPage}) => {

  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(genresFilter(e));
    setCurrentPage(1);
  };


  return (
    <MyDiv>
      <MyButton onClick={() => handleClick()}>{e}</MyButton>
    </MyDiv>
  )
}
