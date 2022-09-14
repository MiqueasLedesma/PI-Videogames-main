// import './App.css';
import { Videogames } from './components/Videogames';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Genres } from './components/Genres';
// import store from './Redux/store';
import { getGenres, getVideogames } from './Redux/actions';
import { useEffect } from 'react';
// import { Pagination } from './components/Pagination';
import styled from 'styled-components';
import img from './imagenes/7445.webp'
import { Details } from './components/Details';
import { useSelector } from 'react-redux';
import { ControlledForm } from './components/ControlledForm';
import { useDispatch } from 'react-redux';
import { SearchResults } from './components/SearchResults';


const MyDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #ddd;
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
`;


function App() {


  const dispatch = useDispatch();
  const reduxState = useSelector(state => state)

  if (reduxState.videogames[0] === undefined) dispatch(getVideogames());
  if (reduxState.genres[0] === undefined) dispatch(getGenres());

  const genres = reduxState.genres;


  useEffect(() => {

  }, [reduxState]);


  return (
    <MyDiv>
      <Navbar />
      <Route path="/videogames">
        {reduxState.videogames[0] !== undefined ? <Videogames /> : <Loading />}
      </Route>
      <Switch>
        <Route exact path={'/genres'}>
          {reduxState.videogames[0] !== undefined ? <Genres genres={genres} /> : <Loading />}
        </Route>
        <Route exact path={'/'}>
          {reduxState.videogames[0] !== undefined ? <Home /> : <Loading />}
        </Route>
        <Route exact path={'/videogameDetails'}>
          {!reduxState.videogameDetails[0] ? <Details /> : <Loading />}
        </Route>
        <Route exact path={'/creategame'} >
          <ControlledForm />
        </Route>
        <Route exact path={'/searchvideogame'}>
          <SearchResults />
        </Route>
      </Switch>
    </MyDiv>
  );
}

export default App;
