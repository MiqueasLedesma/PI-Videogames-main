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
import { useSelector } from 'react-redux';


const MyDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #ddd;
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
`;


function App() {

  let [games, setGames] = useState([]);

  const reduxState = useSelector(state => state);

  if (games[0] === undefined) store.dispatch(getVideogames())

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);



  useEffect(() => store.subscribe(() => {
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

    const getGames = queSeRenderiza();

    setGames(getGames);
    console.log(getGames)

  }, [store]));



  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // { reduxState.Details[0] !== undefined ? <Details /> : <Loading /> }

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
          {!reduxState.videogameDetails[0] ? <Details /> : <Loading />}
        </Route>
      </Switch>
    </MyDiv>
  );
}

export default App;
