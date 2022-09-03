const { default: axios } = require("axios");
// const { response } = require("express");
const { YOUR_API_KEY, genre, Videogame } = require('../../db');

const getVideogames = async () => {
    let showVideogames = [];
    await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page_size=100`)
        .then(r => showVideogames = r.data.results);
    await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2&page_size=100`)
        .then(r => showVideogames = showVideogames.concat(r.data.results));
    await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3&page_size=100`)
        .then(r => showVideogames = showVideogames.concat(r.data.results));
    let responseVG = showVideogames.map(e => {
        return {
            id: e.id,
            name: e.name,
            image: e.background_image,
            release: e.released,
            rating: e.rating,
            platforms: e.platforms.map(ch => ch.platform.name),
            genres: e.genres.map(ch => ch.name)
        };
    });
    return responseVG.slice(0, 100);
};

const getVideogameQuery = async (name) => {
    console.log(name)
    let responseVG;
    await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`)
        .then(r => {
            responseVG = r.data.results.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    release: e.released,
                    rating: e.rating,
                    platforms: e.platforms.map(ch => ch.platform.name),
                    genres: e.genres.map(ch => ch.name)
                };
            });
        });
    return responseVG.slice(0, 15);
};

const getVideogameFromDB = async (name) => {
    let dbGames = Videogame.findAll({
        where: {
            name: { [Op.iLike]: '%' + name + '%' }
        }, include: genre
    });
    console.log(name + ' Traido desde DB');
    return dbGames.slice(0, 15);
};




module.exports = { getVideogames, getVideogameQuery, getVideogameFromDB };