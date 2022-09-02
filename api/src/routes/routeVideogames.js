const { default: axios } = require('axios');
let express = require('express');
const { YOUR_API_KEY, conn, genres, Videogame } = require('../db');
let router = express.Router();

//si recibo un query busco ese juego
router.get('/', async (req, res) => {
    if (req.query.name) {
        // let { nombre } = req.query.name;
        try {
            await axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${YOUR_API_KEY}`)
                .then(r => {
                    if (!r.data.count) return res.status(404).json(`El juego "${req.query.name}" no existe!`)
                    else {
                        let searchArray = [];
                        r.data.results.forEach(g => {
                            if (searchArray[14]) console.log(console.log(req.query.name))
                            if (searchArray[14]) return res.json(searchArray);
                            let obj = {
                                id: g.id,
                                name: g.name,
                                rating: g.rating,
                                image: g.background_image,
                                released: g.released
                            };
                            searchArray.push(obj);
                        });
                        if (searchArray.length < 15) return res.json(searchArray);
                    }
                })
        } catch (error) {
            console.log(error)
        }
    } else {
        //Si no recibo ningun query me traigo 100 juegos para renderizar
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
    }
});







//Crear un vg
router.post('/', async (req, res) => {
    let { name, description, reldate, rating, platform, /* genres */ } = req.body;
    // platform = platform.join(', ');
    try {
        let newGame = await Videogame.findOrCreate({
            where: {
                name,
                description,
                platform,
                reldate,
                rating,
                // genres
            }
        });
        // await newGame[0].setGenre(genres);
        console.log('Funciono!')
        return res.status(200).send('Todo Okey');
    } catch (error) {
        console.log(error);
        res.status(400).send('Todo Mal');
    }
})

module.exports = router;