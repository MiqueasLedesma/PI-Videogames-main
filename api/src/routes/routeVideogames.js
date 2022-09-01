const { default: axios } = require('axios');
let express = require('express');
const { YOUR_API_KEY, Videogame, Genre, conn } = require('../db');
let router = express.Router();


router.get('/', async (req, res) => {
    let showVideogames;
    try {
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page_size=100`)
            .then(r => showVideogames = r.data.results)
        return res.json(showVideogames);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;