import './App.css';
import { Videogames } from './components/Videogames';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from './components/Loading';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Genres } from './components/Genres';
// import { getVideogames } from './Redux/actions';



const urlBase = `http://localhost:3001/videogames`

function App() {

  const [games, setGames] = useState([]);
  let getGames = () => {
    axios.get(urlBase)
      .then(r => {
        console.log(r.data)
        setGames(r.data)
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getGames();
  }, [])



  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/videogames">
          {games[0] !== undefined ? <Videogames info={games} /> : <Loading />}
        </Route>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/genres'}>
          <Genres />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
