import React, { useState } from 'react';
import styled from 'styled-components';
import { /* Link */ NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogamesByName, showSearchResults, sortGamesLowMax } from '../Redux/actions';
//Estilos CSS
//------------------------------------------------------------------------------------------------------------------------------------

let RightLI = {
  float: 'right'
};

const MyDiv = styled.div`
  overflow: hidden;
  background-color: black;
  align-items: center;
  top: 0;
  width: 100%; 
  margin: auto;
`;

const MyUl = styled.ul`
  list-style-type: none;
  overflow: hidden;
  background-color: black;
`;

const MyLi = styled.li`
float: left;
`;

// const MyLinkButton = styled(Link)`

// `;

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
text-decoration: none;
overflow: hidden;
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

// Componente || logica
//-------------------------------------------------------------------------------------------------------------------------------------------


export const Navbar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideogamesByName(name));
    setName('');
    dispatch(showSearchResults());
  };

  const handleSort =  (e) => {
    e.preventDefault();
    dispatch(sortGamesLowMax());
  }

  return (
    <MyDiv>
      <MyUl>
        <MyLi><MyLink to={'/'}>Home</MyLink></MyLi>
        <MyLi><MyLink to={'/videogames'}>Videogames!</MyLink></MyLi>
        <MyLi><MyLink to={'/genres'}>Genres</MyLink></MyLi>
        <MyLi><MyLink to={'/creategame'}>CreateGame</MyLink></MyLi>
        <MyLi><MyLink to={'/about'}>About</MyLink></MyLi>
        <MyLi><MyButton onClick={(e) => handleSort(e)}>Sort</MyButton></MyLi>
        <MyLi style={RightLI}><MyButton onClick={(e) => handleSubmit(e)}>Search</MyButton></MyLi>
        <MyLi style={RightLI}><MyInput type="text" placeholder="Search.." onChange={(e) => handleChange(e)} /></MyLi>
      </MyUl>
    </MyDiv>
  )
}

