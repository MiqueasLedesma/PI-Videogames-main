import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
let RightLI = {
  float: 'right'
};

const MyDiv = styled.div`
  /* position: fixed;
  top: 0;  */
  width: 100%;
  color: black;
`;

const MyUl = styled.ul`
  opacity: 1;
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

const MyInput = styled.input`
  float: right;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 15px;
  text-decoration: none;
  font-size: 16px;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: none;
  width: 130px;
  -webkit-transition: width 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
  &:focus {
    width: 100%;
  }
`;

const MyButton = styled.button`
  position: relative;
  background-color: #4DD8DA;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  padding: 14px;
  width: 80px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:after {
  content: "";
  background: black;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
  }
  &:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

`;

export const Navbar = () => {
  return (
    <MyDiv>
      <MyUl>
        <MyLi><MyLink to={'/Home'}>Home</MyLink></MyLi>
        <MyLi><MyLink to={'/videogames'}>Videogames!</MyLink></MyLi>
        <MyLi><MyLink to={'/genres'}>Genres</MyLink></MyLi>
        <MyLi><MyLink to={'/creategame'}>CreateGame</MyLink></MyLi>
        <MyLi><MyLink to={'/about'}>About</MyLink></MyLi>
        <MyLi style={RightLI}><MyInput type="text" placeholder="Search.." /></MyLi>
        <MyLi style={RightLI}><MyButton type="submit">Search</MyButton></MyLi>
      </MyUl>
    </MyDiv>
  )
}
