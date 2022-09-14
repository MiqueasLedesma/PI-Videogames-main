const { default: axios } = require('axios');
// const { response } = require("express");
const { YOUR_API_KEY, Genre, Videogame } = require('../../db');

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

    let responseVG;
    await axios.get(`https://api.rawg.io/api/games?search=${name.split(' ').join('-')}&key=${YOUR_API_KEY}`)
        .then(r => {
            responseVG = r.data.results.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    release: e.released,
                    rating: e.rating,
                    platforms: e.platforms.map(ch => ch),
                    genres: e.genres.map(ch => ch.name)
                };
            });
        });

    let gamesDB = await Videogame.findAll({
        where: {
            name: '%' + name + '%'
        }, include: Genre,
        raw: true
    });
    console.log(gamesDB);
    let responseDB = gamesDB.map(el => {
        return {
            id: el.id,
            name: el.name,
            description: el.description,
            image: el.image,
            release: el.release,
            rating: el.rating,
            platforms: el.platforms.map(ch => ch),
            genres: el.genres.map(ch => ch.name),
            createdInDB: el.createdInDB
        }
    })

    return responseVG.concat(responseDB);
};

// const getVideogameFromDB = async (name) => {
//     let dbGames = Videogame.findAll({
//         where: {
//             name: { [Op.iLike]: '%' + name + '%' }
//         }, include: Genre
//     });
//     console.log(name + ' Traido desde DB');
//     return dbGames.slice(0, 15);
// };

// const getGameByID = async (id) => {
//     await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
//         .then(r => {
//             console.log(id);
//             let info;
//             info = r.data
//             let response = {
//                 name: info.name,
//                 image: info.background_image,
//                 description: info.description,
//                 release: info.released,
//                 rating: info.rating,
//                 platforms: info.platforms.map(ch => ch.platform.name),
//                 genres: info.genres.map(ch => ch.name)
//             };
//             console.log(response);
//             return response;
//         });
// };

module.exports = { getVideogames, getVideogameQuery /* getGameByID */ };