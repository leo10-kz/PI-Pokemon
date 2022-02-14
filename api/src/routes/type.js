const { default: axios } = require('axios');
const { Router } = require('express');
const { Type } = require('../db')
const router = Router();



router.get('/', async (req, res, next) =>{
    
    try {
     const tipos = await axios.get('https://pokeapi.co/api/v2/type')
     let tipoPokemon  = tipos.data.results
    
 } catch (error) {
     next(error)
 }
})

module.exports = router;
