const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const { YOUR_API_KEY, Videogame, Genre } = require('../db');


router.get('/:idvg', async (req, res) => {
    let id = req.params.idvg;
    if (id.length < 7) {
        try {
            await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
                .then(r => {
                    let info;
                    info = r.data
                    let response = {
                        name: info.name,
                        image: info.background_image,
                        description: info.description,
                        release: info.released,
                        rating: info.rating,
                        platforms: info.platforms.map(ch => ch.platform.name).join(', '),
                        genres: info.genres.map(ch => ch.name).join(', ')
                    };
                    return res.json(response);
                });
        } catch (error) {
            console.log(error);
            res.send(error)
        };
    } else {
        await Videogame.findByPk(id, { include: Genre })
            .then(r => {
                let info = r.dataValues();
                return {
                    name: info.name,
                    image: info.background_image,
                    description: info.description,
                    release: info.released,
                    rating: info.rating,
                    platforms: info.platforms.map(ch => ch.platform.name),
                    genres: info.genres.map(ch => ch.name)
                };
            });
    };
});

module.exports = router;