// import './App.css';
import { Videogames } from './components/Videogames';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Genres } from './components/Genres';
// import store from './Redux/store';
import { getGenres, getVideogames } from './Redux/actions';
import { useEffect, useState } from 'react';
import { Pagination } from './components/Pagination';
import styled from 'styled-components';
import img from './imagenes/7445.webp'
import { Details } from './components/Details';
import { useSelector } from 'react-redux';
import { ControlledForm } from './components/ControlledForm';
import { useDispatch } from 'react-redux';


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
  const reduxState = useSelector(state => state);
  const [games, setGames] = useState([]);


  if (reduxState.videogames[0] === undefined) dispatch(getVideogames());
  if (reduxState.genres[0] === undefined) dispatch(getGenres());

  let genres = reduxState.genres;

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  useEffect(() => {

    const queSeRenderiza = () => {
      if (reduxState.searchResults) {
        if (reduxState.videogameSearch.length === 0) {
          alert('Videogame Not Found!');
          return reduxState.videogames;
        };
        setCurrentPage(1);
        return reduxState.videogameSearch;
      } else if (!reduxState.searchResults) return reduxState.videogames;
    };

    const getGames = !reduxState.sortBy ?
      queSeRenderiza() : reduxState.sortBy === 'ASCENDENT' ? queSeRenderiza().sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        };
        if (a.name < b.name) {
          return -1;
        };
        return 0;
      }) : reduxState.sortBy === 'DESENDENT' ? queSeRenderiza().sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        };
        if (a.name < b.name) {
          return -1;
        };
        return 0;
      }).reverse() : null;

    setGames(getGames);

  }, [reduxState, games]);



  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MyDiv>
      <Navbar />
      <Route path="/videogames">
        {games[0] !== undefined ? <Videogames info={currentGames} /> : <Loading />}
        <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} />
      </Route>
      <Switch>
        <Route exact path={'/genres'}>
          {games[0] !== undefined ? <Genres genres={genres} /> : <Loading />}
        </Route>
        <Route exact path={'/'}>
          {games[0] !== undefined ? <Home /> : <Loading />}
        </Route>
        <Route exact path={'/videogameDetails'}>
          {!reduxState.videogameDetails[0] ? <Details /> : <Loading />}
        </Route>
        <Route exact path={'/creategame'} >
          <ControlledForm />
        </Route>
      </Switch>
    </MyDiv>
  );
}

export default App;
