const { default: axios } = require('axios');
const { Router } = require('express');
const { Type } = require('../db')
const router = Router();



router.get('/', async (req, res, next) =>{
    
    try {
     const tipos = await axios.get('https://pokeapi.co/api/v2/type')
     let tipoPokemon  = tipos.data.results
     let psj = tipoPokemon.map(t => {return {nombre:t.name}})
     const tiposPjs = await Type.bulkCreate(psj)
     
     res.json(tiposPjs)
 } catch (error) {
     next(error);
 }
})

module.exports = router;
