let express = require('express');
const { Genres, Videogame } = require('../db');
const { getVideogames, getVideogameQuery } = require('./Controllers/controllersVG');
let router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.name) {
        try {

            let response = await getVideogameQuery(req.query.name);

            return res.json(response)

        } catch (error) {

            res.send(error);
        }
    } else {

        try {

            let response = await getVideogames();

            console.log(response);

            return res.json(response);

        } catch (error) {

            return res.send(error);
            
        };
    };
});

router.post('/', async (req, res) => {
    try {
        let { name, description, rating, platforms, released, genres } = req.body;
        let newGame = await Videogame.create({
            name,
            description,
            rating,
            platforms,
            released
        });
        let genreDB = await Genres.findAll({
            where: {
                name: genres
            }
        });
        newGame.addGenre(genreDB);
        return res.send('VideoGame Creado!')
    } catch (error) {
        console.log(error);
        res.send('Fallo!');
    };
});


module.exports = router;