import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let RightLI = {
  float: 'right'
}

const MyDiv = styled.div`
color: black;
`;

const MyUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const MyLi = styled.li`
float: left;
`;

const MyLink = styled(Link)`
background-color: black;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
&:hover {
  background-color: #04AA6D;
};
&:active {
  background-color: #04AA6D;
  color: black;
}
`;

export const Navbar = () => {
  return (
    <MyDiv>
      <MyUl>
        <MyLi><MyLink to={'/home'}>Videogames!</MyLink></MyLi>
        <MyLi><MyLink to={'/genres'}>Genres</MyLink></MyLi>
        <MyLi><MyLink to={'/creategame'}>CreateGame</MyLink></MyLi>
        <MyLi style={RightLI}><MyLink to={'/about'}>About</MyLink></MyLi>
      </MyUl>
    </MyDiv>
  )
}
