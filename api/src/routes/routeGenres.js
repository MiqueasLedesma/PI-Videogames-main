const { Router } = require('express');
const { Genres } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const allGenres = await Genres.findAll({
            name: 'name'
        });
        let dbGenres = allGenres.map(e => e.name)
        console.log('Salio Bien!')
        return res.status(200).send(dbGenres);
    } catch (error) {
        console.log(error);
        return res.send(`Error en la ruta '/genres'`);
    }
})

module.exports = router;