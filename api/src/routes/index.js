const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rutaPokemons = require('./pokemon.js');
const rutaTypes = require('./type');

const router = Router();
router.use('/pokemons', rutaPokemons);
router.use('/types', rutaTypes);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
