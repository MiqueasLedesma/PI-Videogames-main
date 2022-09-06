import './App.css';
import { Videogames } from './components/Videogames';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from './components/Loading';
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
  }
  useEffect(() => {
    getGames();
  }, [])



  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      {games[0] !== undefined ? <Videogames info={games} /> : <Loading />}
    </div>
  );
}

export default App;
