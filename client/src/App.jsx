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
import img from './imagenes/background.jpg'


const MyDiv = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${img});
  background-size: cover;
`;

function App() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(8);


  if (games[0] === undefined) store.dispatch(getVideogames());

  useEffect(() => store.subscribe(() => {
    const getGames = store.getState().videogames
    setGames(getGames);
  }, [store, games]));


  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MyDiv>
      <br />
      <Navbar />
      <br />
      <br />
      {/* <br /> */}
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
      </Switch>
    </MyDiv>
  );
}

export default App;
