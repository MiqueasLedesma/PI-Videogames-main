import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogamesByName } from '../Redux/actions';
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
`;

const MyInput = styled.input`
  margin-right: 20px;
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
  width: 180px;
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

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getVideogamesByName(name));
    setName('');
  };

  return (
    <MyDiv>
      <MyUl>
        {/* <MyLi><MyLink to={'/'}>Home</MyLink></MyLi> */}
        <MyLi><MyLink to={'/videogames'}>Videogames!</MyLink></MyLi>
        <MyLi><MyLink to={'/genres'}>Genres</MyLink></MyLi>
        <MyLi><MyLink to={'/creategame'}>CreateGame</MyLink></MyLi>
        <MyLi style={RightLI}><MyInput type="text" placeholder="Search.." onChange={(e) => handleChange(e)} /></MyLi>
        <MyLi style={RightLI} onClick={(e) => handleClick(e)}><MyLink to={'/searchvideogame'}>Search</MyLink></MyLi>
      </MyUl>
    </MyDiv>
  )
}

