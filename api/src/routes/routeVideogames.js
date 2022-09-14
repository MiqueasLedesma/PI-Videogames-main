// const { default: axios } = require('axios');
// const { response } = require('express');
let express = require('express');
const { Genre, Videogame } = require('../db');
// const Genres = require('../models/Genres');
const { getVideogames, getVideogameQuery } = require('./Controllers/controllersVG');
// const { sequelize } = require('sequelize');
let router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.name) {
        // let nombre = req.query.name;
        try {
            let response = await getVideogameQuery(req.query.name);
            return res.json(response)
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    } else {
        try {
            let response = await getVideogames();
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.send(error);
        };
    };
});

router.post('/', async (req, res) => {
    try {
        let { name, description, rating, platform, released, genre } = req.body;
        let newGame = await Videogame.create({
            name,
            description,
            rating,
            platform,
            released
        });
        let genreDB = await Genre.findAll({
            where: {
                name: genre
            }
        });
        newGame.addGenre(genreDB);
        return res.send('VideoGame Creado!')
    } catch (error) {
        console.log(error);
        res.send('Fallo!');
    }
})

//Crear un vg
// router.post('/', async (req, res) => {
//     let { name, description, reldate, rating, platform, /* genres */ } = req.body;
//     // platform = platform.join(', ');
//     try {
//         let newGame = await Videogame.findOrCreate({
//             where: {
//                 name,
//                 description,
//                 platform,
//                 reldate,
//                 rating,
//                 // genres
//             }
//         });
//         // await newGame[0].setGenre(genres);
//         console.log('Funciono!')
//         return res.status(200).send('Todo Okey');
//     } catch (error) {
//         console.log(error);
//         res.status(400).send('Todo Mal');
//     }
// })

module.exports = router;