import React from 'react';
import styled from 'styled-components';

const Myul = styled.ul`
   position: fixed;
   bottom: 0px;
   text-align: center;
   margin-left: -140px;
   left: 50%;
`;

const MyLi = styled.li`
  list-style: none;
  float: left;
`;

const MyButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  transition: 0.3s;
  &:hover {
    background-color: black;
    font-size: 16px;
    padding: 10px 14px;
  }
`;

const MyDiv = styled.div`
justify-content: center;
`;

export const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <MyDiv>
            <Myul>
                {pageNumbers.map(number => (
                    <MyLi key={number}><MyButton onClick={() => {
                        paginate(number)
                    }}>{number}</MyButton></MyLi>
                ))}
            </Myul>
        </MyDiv>
    )
}
