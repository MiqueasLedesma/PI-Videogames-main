require('dotenv').config();
const axios = require('axios');
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, YOUR_API_KEY
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product where: {}=> Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Videogame.belongsToMany(Genre, { through: 'Videogame_genre' });
Genre.belongsToMany(Videogame, { through: 'Videogame_genre' });

// let YOUR_API_KEY = '2e4976c2679c4f378ccf9af9c490a4b3'

let urlBase = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`

const injectInfo = async () => {
  let genres;
  try {
    await axios.get(urlBase).then(r => genres = r.data.results.map(p => p.name))
    genres.forEach(e => {
      Genre.findOrCreate({
        where: {
          name: e
        }
      });
    });
  } catch (e) {
    console.log(e);
  };
};

injectInfo();



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  YOUR_API_KEY : YOUR_API_KEY,     // para importart la conexión { conn } = require('./db.js');
};
