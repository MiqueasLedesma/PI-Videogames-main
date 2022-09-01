const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeVideogames = require('./routeVideogames')
const routeGenres = require('./routeGenres')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routeVideogames);
router.use('/genres', routeGenres);

module.exports = router;
