// import './App.css';
import { Videogames } from './components/Videogames';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Genres } from './components/Genres';
import store from './Redux/store';
import { getVideogames } from './Redux/actions';
import { useEffect, useState } from 'react';
import { Pagination } from './components/Pagination';
import styled from 'styled-components';
import img from './imagenes/7445.webp'
import { Details } from './components/Details';


const MyDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #ddd;
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
`;


function App() {

  const [games, setGames] = useState([]);


  if (games[0] === undefined) store.dispatch(getVideogames())

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);



  useEffect(() => store.subscribe(() => {

    let queSeRenderiza = () => {
      if (store.getState().searchResults) {
        if (store.getState().videogameSearch.length === 0) {
          alert('Videogame Not Found!');
          return store.getState().videogames;
        }
        setCurrentPage(1);
        return store.getState().videogameSearch;
      }
      else if (!store.getState().searchResults) return store.getState().videogames;
    };

    const getGames = queSeRenderiza();

    setGames(getGames);

  }, [store]));


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
          {games[0] !== undefined ? <Genres /> : <Loading />}
        </Route>
        <Route exact path={'/'}>
          {games[0] !== undefined ? <Home /> : <Loading />}
        </Route>
        <Route exact path={'/videogameDetails'}>
          <Details />
        </Route>
      </Switch>
    </MyDiv>
  );
}

export default App;
