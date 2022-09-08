import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
let RightLI = {
  float: 'right'
};

const MyDiv = styled.div`
  overflow: hidden;
  background-color: black;
  height: 100%;
  align-items: center;
  /* position: fixed; */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
`;

const MyUl = styled.ul`
  list-style-type: none;
  overflow: hidden;
  background-color: black;
  /* overflow: hidden; */
  /* background-color: black; */
  /* overflow: hidden; */
  /* background-color: #333; */
`;

const MyLi = styled.li`
float: left;
`;

const MyLink = styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: black;

transition: 0.4s;
&:hover {
  background-color: #04AA6D;
  padding: 14px 18px;
};
/* &:active {
  background-color: #04AA6D;
  color: black;
} */
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
  margin-right: 20px;
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
        <MyLi><MyLink to={'/'}>Home</MyLink></MyLi>
        <MyLi><MyLink to={'/videogames'}>Videogames!</MyLink></MyLi>
        <MyLi><MyLink to={'/genres'}>Genres</MyLink></MyLi>
        <MyLi><MyLink to={'/creategame'}>CreateGame</MyLink></MyLi>
        <MyLi><MyLink to={'/about'}>About</MyLink></MyLi>
        <MyLi style={RightLI}><MyButton type="submit">Search</MyButton></MyLi>
        <MyLi style={RightLI}><MyInput type="text" placeholder="Search.." /></MyLi>
      </MyUl>
    </MyDiv>
  )
}
