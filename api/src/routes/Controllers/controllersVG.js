const { default: axios } = require('axios');
// const { response } = require("express");
const { YOUR_API_KEY, Genres, Videogame } = require('../../db');
const { Op } = require('sequelize');

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

    let responseVG = [];
    await axios.get(`https://api.rawg.io/api/games?search=${name.split(' ').join('-')}&key=${YOUR_API_KEY}`)
        .then(r => {
            responseVG = r.data.results.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms.map(ch => ch),
                    genres: e.genres.map(ch => ch.name)
                };
            });
        });

    let gamesDB = await Videogame.findAll({
        where: {
            name: { [Op.iLike]: '%' + name + '%' }
        }, include: Genres
    });

    return gamesDB.concat(responseVG);
};




module.exports = { getVideogames, getVideogameQuery };