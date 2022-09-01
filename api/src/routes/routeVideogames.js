const { default: axios } = require('axios');
let express = require('express');
const { YOUR_API_KEY, conn, genres, Videogame } = require('../db');
let router = express.Router();

//traer 100 vg desde la api
router.get('/', async (req, res) => {
    let showVideogames;
    try {
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page_size=100`)
            .then(r => showVideogames = r.data.results);
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2&page_size=100`)
            .then(re => showVideogames = showVideogames.concat(re.data.results));
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3&page_size=100`)
            .then(ree => showVideogames = showVideogames.concat(ree.data.results));
        let vgArray = [];
        showVideogames.forEach(vg => {
            if (vgArray[99]) console.log(`se envio informacion sobre ${vgArray.length} videogames`);
            if (vgArray[99]) return res.json(vgArray);
            let obj = {
                id: vg.id,
                name: vg.name,
                rating: vg.rating,
                image: vg.background_image,
                released: vg.released
            };
            vgArray.push(obj);
        });
    } catch (error) {
        console.log(error);
    }
});

//Crear un vg
router.post('/', async (req, res) => {
    let { name, description, reldate, rating, platform, genres } = req.body;
    // platform = platform.join(', ');
    try {
        let newGame = await Videogame.findOrCreate({
            where: {
                name,
                description,
                platform,
                reldate,
                rating
            }
        });
        await newGame[0].setGenres(genres);
        console.log('Funciono!')
        return res.status(200).send('Todo Okey');
    } catch (error) {
        console.log(error);
        res.status(400).send('Todo Mal');
    }
})

module.exports = router;