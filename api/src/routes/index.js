const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeVideogames = require('./routeVideogames');
const routeGenres = require('./routeGenres');
const routeVideogame = require('./routeVideogame');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routeVideogames);
router.use('/genres', routeGenres);
router.use('/videogame/', routeVideogame);

module.exports = router;
